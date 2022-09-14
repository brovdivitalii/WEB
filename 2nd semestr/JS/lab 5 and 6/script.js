let id = 0;
class DAI {
  constructor(code, pib, model, number, color) {
    this.code = code;
    this.pib = pib;
    this.model = model;
    this.number = number;
    this.color = color;
    this.id = ++id;
  }
}
class StringifyDAI extends DAI {
  ToString() {
    return `
        code:${this.code};
        PIB:${this.pib};
        Model:${this.model};
        number:${this.number};
        color:${this.color};
        `;
  }
}
class Cars {
  constructor() {
    this.cars = [];
  }
  addOne(el) {
    this.cars.push(el);
  }
  addMany(elements) {
    elements.forEach((el) => {
      this.cars.push(el);
    });
  }
  delete(uid) {
    // u - user; uid - user id
    let ind = this.cars.findIndex((el) => el.id == uid);
    if (ind == -1) throw "not found";
    this.cars.splice(ind, 1);
  }
  edit(uid, newuid) {
    let olduid = this.cars.findIndex((el) => el.id == uid);
    this.cars[olduid] = newuid;
    this.cars[olduid].id = uid;
    id--;
  }
  getById(uid) {
    return this.cars.find((el) => el.id == uid);
  }
  getByModel(umodel) {
    return [...this.cars.filter((el) => el.model == umodel)];
  }
  getByNumber(unumber) {
    return [
      ...this.cars.filter(
        (el) => el.number.substring(0, unumber.length) == unumber
      ),
    ];
  }
  getInf(uid) {
    return this.getById(uid).ToString();
  }
  getAll() {
    return [...this.cars];
  }
}
class CarswithDOM extends Cars {
  carsToHTML(car) {
    return `
      <tr>
      <td>
          ${car.id}
      </td>
      <td>
          ${car.code}
      </td>
      <td>
          ${car.pib}
      </td>
      <td>
          ${car.model}
      </td>
      <td>
          ${car.number}
      </td>
      <td>
          ${car.color}
      </td>
      <td> 
          <button onclick="DeleteUser(${car.id})">
              Delete
          </button>
      </td>
      <td> 
          <button onclick="StartEditUser(${car.id})">
              Edit
          </button>
      </td>
      </tr>
    `;
  }
  carsTableToHTML() {
    let rows = "";
    for (let car of this.getAll()) {
      rows += this.carsToHTML(car);
    }
    return `
    <table>
        <tr>
            <th>
                ID
            </th>
            <th>
                Code
            </th>
            <th>
                PIB
            </th>
            <th>
                Model
            </th>
            <th>
                Number
            </th>
            <th>
                Color
            </th>
            <th colspan="2">
                Actions
            </th>
        </tr>
        ${rows}
    </table>
    <br>
    <button type="button" onclick="ShowAddUser()">
        Add user
    </button>
`;
  }
  addFormToHTML() {
    return ` 
    <div id="add">
        <form name="addForm" method="post" action="#">
            <h3> Add User </h3>
            <input name="code" placeholder="code"> 
            <input name="pib" placeholder="pib"> 
            <input name="model" placeholder="model">
            <input name="number" placeholder="number">
            <input name="color" placeholder="color">
            <button type="button" onclick="AddNewUser()">
                Saveit
            </button>
        </form>
    </div>
`;
  }
  editFormToHTML() {
    return ` 
    <div id="edit">
        <form name="editForm" method="post" action="#">
            <h3> Edit User </h3>
            <input name="id" type="hidden">
            <input name="code" placeholder="code"> 
            <input name="pib" placeholder="pib"> 
            <input name="model" placeholder="model">
            <input name="number" placeholder="number">
            <input name="color" placeholder="color">
            <button type="button" onclick="EditUser()">
                Save it
            </button>
        </form>
    </div>
`;
  }
  toHTML() {
    return (
      all.carsTableToHTML() + this.addFormToHTML() + this.editFormToHTML()
    );
  }
  addEventListeners() {
    document.addEventListener("deleteUser", (event) => {
      super.delete(event.detail.id);
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("addUser", (event) => {
      super.addOne(
        new StringifyDAI(
          event.detail.code,
          event.detail.pib,
          event.detail.model,
          event.detail.number,
          event.detail.color
        )
      );
      document.getElementById("root").innerHTML = this.toHTML();
    });
    document.addEventListener("editUser", (event) => {
      super.edit(
        event.detail.id,
        new StringifyDAI(
          event.detail.code,
          event.detail.pib,
          event.detail.model,
          event.detail.number,
          event.detail.color
        )
      );
      document.getElementById("root").innerHTML = this.toHTML;
    });
  }
}
function DeleteUser(id) {
  let DeleteUserEvent = new CustomEvent("deleteUser", { detail: { id } });
  document.dispatchEvent(DeleteUserEvent);
}
function AddNewUser() {
  const code = document.getElementsByName("code")[0].value;
  const pib = document.getElementsByName("pib")[0].value;
  const model = document.getElementsByName("model")[0].value;
  const number = document.getElementsByName("number")[0].value;
  const color = document.getElementsByName("color")[0].value;
  let addUserEvent = new CustomEvent("addUser", {
    detail: {
      code,
      pib,
      model,
      number,
      color,
    },
  });
  document.dispatchEvent(addUserEvent);
}
function ShowAddUser() {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
}
function EditUser() {
  const code = document.getElementsByName("code")[1].value;
  const pib = document.getElementsByName("pib")[1].value;
  const model = document.getElementsByName("model")[1].value;
  const number = document.getElementsByName("number")[1].value;
  const color = document.getElementsByName("color")[1].value;
  const id = document.getElementsByName("id").value;
  let addUserEvent = new CustomEvent("editUser", {
    detail: {
      id,
      code,
      pib,
      model,
      number,
      color,
    },
  });
  document.dispatchEvent(addUserEvent);
}
function StartEditUser(id) {
  document.getElementById("edit").style.display = "block";
  document.getElementById("add").style.display = "none";
  let car = all.getById(id);
  document.getElementsByName("code")[1].value = car.code;
  document.getElementsByName("pib")[1].value = car.pib;
  document.getElementsByName("model")[1].value = car.model;
  document.getElementsByName("number")[1].value = car.number;
  document.getElementsByName("color")[1].value = car.color;
  document.getElementsByName("id").value = id;
}
let Car1 = new StringifyDAI(
  "vincode1",
  "Бровді Віталій Михайлович",
  "Hyundai",
  "AO0423AC",
  "black"
);
let Car2 = new StringifyDAI(
  "vincode2",
  "Бровді Антон Михайлович",
  "Audi",
  "AO0395BE",
  "gray"
);
let Car3 = new StringifyDAI(
  "vincode3",
  "Бровді Михайло Антонович",
  "Chery",
  "AO0199AO",
  "gray"
);
let Car4 = new StringifyDAI(
  "vincode4",
  "Бровді Еріка Євгенівна",
  "Renoult",
  "AO4395BC",
  "green"
);
let all = new CarswithDOM();

all.addOne(Car1);
all.addOne(Car2);
all.addOne(Car3);
all.addOne(Car4);
document.getElementById("root").innerHTML = all.toHTML();
all.addEventListeners();
