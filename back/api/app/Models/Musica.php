<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    public $timestamps = false;
    protected $table = "musica";
    protected $primaryKey = 'id';
    protected $fillable = ['name','duracao','compositor','estilo'];
}
