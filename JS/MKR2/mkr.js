/* 
Використовуючи js, HTML та СSS створити:
a. Об’єкт для зберігання даних про фільм (Id, назва, режисер,
продюсер, список акторів, URL-трейлеру, рік випуску, касові збори).
b. На основі об’єкту фільму створити новий об’єкт, який перевизначає
метод toString()
c. Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт
повинен містити конструктор та метод для вилучення фільмів, які
мають касові збори менші ніж Х$
d. Відобразити дані про вилучені фільми на сторінці.
 */

class Film {
  constructor(id, name, director, producer, actors, url, year, sales) {
    this.id = id;
    this.name = name;
    this.director = director;
    this.producer = producer;
    this.actors = actors;
    this.url = url;
    this.year = year;
    this.sales = sales;
  }
}
class StringtoFilm extends Film {
  toString() {
    return `${super.toString()}{
            id:${this.id},
            name:${this.name},
            director:${this.director},
            producer:${this.producer},
            actors:${this.actors},
            url:${this.url},
            year:${this.year},
            sales:${this.sales}
        }`;
  }
}
class FilmCollection {
  constructor(items = []) {
    this.items = items;
  }
  add(film) {
    this.items.push(film);
  }
  getByid(id) {
    return this.items.find((film) => film.id == id);
  }
  /* видалення фільмів за заданою кількістю x sales(касові збори) */
  delete(x) {
    let userIndex = this.items.findIndex((film) => film.sales < x);
    if (userIndex == -1) throw "Not found";
    this.items.splice(userIndex, 1);
  }
  getAll() {
    return [...this.items];
  }
}
function deleteuser(id) {
    let deleteuser = new CustomEvent("deleteuser", { detail: { id } });
    document.dispatchEvent(deleteuser);
}
class FilmCollectionHtml extends FilmCollection {
  constructor(items) {
    super(items);
    document.addEventListener("deleteuser", (event) => {
      this.delete(event.detail.id);
      this.mount(this._parrent, this._id);
    });
  }
  filmsToHTML(film) {
    return `
      <tr>
        <td>
            ${film.id}
        </td>
        <td>
            ${film.name}
        </td>
        <td>
            ${film.director}
        </td>
        <td>
            ${film.producer}
        </td>
        <td>
            ${film.year}
        </td>
        <td> 
            <button onclick="deleteuser(${film.id})">
                Delete
            </button>
        </td>
      </tr>
    `;
  }

  filmsTableToHTMl() {
    let rows = "";
    for (let film of this.getAll()) {
      rows += this.filmsToHTML(film);
    }
    return `
      <table>
        <tr>
          <th>
            Id
          </th>
          <th>
            Name
          </th>
          <th>
            Director
          </th>
          <th>
            Producer
          </th>
          <th>
           Year
          </th>
          <th colspan="2">
           Actions
          </th>
        </tr>
          ${rows}
      </table>
        <br>
       
    `;
  }
  addEventListener() {
    document.deleteuser("deleteuser", (event) => {
      let deleted = this.getByid(event.detail.id);
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.filmsTableToHTMl();
      document.getElementById("deleted").innerHTML += `f`;
    });
  }
}

let film1 = new StringtoFilm(1, 2, 3, 4, 5, 6, 7, 8);
let film2 = new StringtoFilm(5, 6, 7, 8, 9, 10, 11, 23);
let films = new FilmCollectionHtml();
films.add(film1);
films.add(film2);

document.getElementById("root").innerHTML = films.filmsTableToHTMl();
films.addEventListener();
