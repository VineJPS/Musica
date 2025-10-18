<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    public $timestamps = false;
    protected $table = "musica";
    protected $fillable = ['name','duracao','compositor','estilo'];
}
