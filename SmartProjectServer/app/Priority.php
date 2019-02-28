<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Priority extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'descripcion',
    ];

    function task(){
        return $this->hasMany('App\Task');
    }
}