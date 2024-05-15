<?php

namespace DesignPatterns\Creational\Singleton\Logger;

enum LogLevel: int {
    case DEBUG = 1;
    case INFO = 2;
    case WARN = 3;
    case ERROR = 4;
}
