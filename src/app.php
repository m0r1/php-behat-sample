<?php

use Silex\Application;
use Symfony\Component\HttpFoundation\Response;

$app = new Application();

// TOP
$app->get('/', function() use ($app) {
    $content = 'This is the TOP page.';
    return new Response($content);
})
->bind('top');

// hello
$app->get('/hello/{name}', function($name) use ($app) {
    $content = sprintf('Hello %s!!\n', $app->escape($name));
    return new Response($content);
})
->bind('hello');

return $app;
