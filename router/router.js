import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", {title: 'mi primer website con ejs'}));

router.get("/about", (req, res) => res.render("about", {title: 'About me'}));

router.get("/contact", (req, res) => res.render("contact", {title: 'Contact me'}));

export default router