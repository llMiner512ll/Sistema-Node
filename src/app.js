import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/task.routes";
import path from "path";
import morgan from "morgan";

const app = express();
//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

//Motor de plantillla engine

const exphbs = create({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    res.status(404).render("404");
});

export default app;