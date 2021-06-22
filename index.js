$(".hero-btn").click(function ()
{
    const superheroes = require('superheroes');
    superheroes.all;       
    $("h3").text(superheroes.random());
});

$(".villain-btn").click(function ()
{
    const supervillains = require('supervillains');
    supervillains.all;
    $("h3").text(supervillains.random());
});