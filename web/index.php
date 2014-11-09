<?php

define('_APP_DIR_', __DIR__.'/..');
define('_SRC_DIR_', _APP_DIR_.'/src');
define('_VENDOR_DIR_', _APP_DIR_.'/vendor');

require_once _VENDOR_DIR_.'/autoload.php';

$app = require _SRC_DIR_.'/app.php';

$app->run();
