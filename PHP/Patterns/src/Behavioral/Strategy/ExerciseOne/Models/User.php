<?php

namespace DesignPatterns\Behavioral\Strategy\ExerciseOne\Models;

class User
{
    /**
     * @var string
     */
    private string $email;
    /**
     * @var string
     */
    private string $name;
    /**
     * @var string
     */
    private string $mobile;

    /**
     * @param string $email
     * @param string $name
     * @param string $mobile
     */
    public function __construct(string $email, string $name, string $mobile)
    {
        $this->email = $email;
        $this->name = $name;
        $this->mobile = $mobile;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getMobile(): string
    {
        return $this->mobile;
    }
}
