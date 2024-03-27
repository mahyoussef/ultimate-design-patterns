<?php

use Behavioral\Memento\History;
use Behavioral\Memento\TextEditor;

$DS = DIRECTORY_SEPARATOR;
require_once __DIR__ . $DS . '..' . $DS . '..' . $DS . '..' . $DS . 'vendor' . $DS . 'autoload.php';

$textEditor = new TextEditor();
$textEditor->setContent('Hello World');

$history = new History();
$history->saveHistoryState($textEditor->save());

$textEditor->setContent('Hello World 2');
$history->saveHistoryState($textEditor->save());

$textEditor->setContent('not saved');

$textEditor->restore($history->undo());

echo $textEditor->getContent();
