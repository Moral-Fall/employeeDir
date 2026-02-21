import express from "express"
import employees from "#db/employees"

const app = express();

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundEmployee = employees.find((employee) => employee.id === id);

  if (!foundEmployee) {
    return res.status(404).send("Employee not found.");
  }


  res.json(foundEmployee);
});

export default app;
