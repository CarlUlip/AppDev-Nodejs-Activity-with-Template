const carl = {
    index:(req, res)=>{
        res.render('index');
    },
    navbar:(req, res)=>{
        res.render('navbar');
    },
    hero:(req, res)=>{
        res.render('hero');
    },
    start:(req, res)=>{
        res.render('start');
    },
    about:(req, res)=>{
        res.render('about');
    },
    services:(req, res)=>{
        res.render('services');
    },
    end:(req, res)=>{
        res.render('end');
    }
};

module.exports = carl;