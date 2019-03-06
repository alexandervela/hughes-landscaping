module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "Hughes Landscaping"});
  },
  about(req, res, next){
    res.render("static/about-us", {title: "About Hughes Landscaping"});
  },
  contact(req, res, next){
    res.render("static/contact", {title: "Contact Hughes Landscaping"});
  },
  design(req, res, next){
    res.render("static/design-and-build", {title: "Commercial and residential landscape design"});
  },
  maintenance(req, res, next){
    res.render("static/maintain", {title: "Commercial and residential landscape maintenance"});
  },
  process(req, res, next){
    res.render("static/our-process", {title: "Our Process"});
  },
  team(req, res, next){
    res.render("static/our-team", {title: "Hughes Landscaping's experienced team"});
  }
}
