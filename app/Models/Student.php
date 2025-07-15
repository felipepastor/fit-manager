<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Student extends Authenticatable
{
    use HasFactory, Notifiable, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'name',
        'nickname',
        'birthday',
        'cellphone',
        'job',
        'height',
        'weight',
        'body_fat',
        'objective',
        'life_style',
        'dedication',
        'active',
        'smoke',
        'drink',
        'drink_frequency',
        'consultancy_before',
        'training_frequency',
        'training_content',
        'training_history',
        'like_training',
        'favorite_training',
        'training_days_week',
        'running_practice',
        'running_frequency',
        'running_frequency_days',
        'running_affinity',
        'running_description',
        'training_affinity',
        'training_description',
        'training_extra_exercise',
        'training_extra_effort',
        'training_extra_frequency_days',
        'do_diet',
        'diet_description',
        'orthopedic_issues',
        'training_specificity',
        'sleeping_hours',
        'tired_when_wake',
        'goals',
        'observations',
        'access_token',
        'answered_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'training_days_week' => 'array',
        'running_frequency_days' => 'array',
        'training_extra_frequency_days' => 'array',
        'height' => 'integer',
        'weight' => 'integer',
        'body_fat' => 'integer',
        'drink_frequency' => 'integer',
        'training_frequency' => 'integer',
        'running_frequency' => 'integer',
        'running_affinity' => 'integer',
        'training_affinity' => 'integer',
        'training_extra_effort' => 'integer',
        'sleeping_hours' => 'integer',
        'dedication' => 'boolean',
        'active' => 'boolean',
        'consultancy_before' => 'boolean',
        'answered_at' => 'datetime',
    ];

    /**
     * Get the teachers (users) associated with this student.
     */
    public function teachers()
    {
        return $this->belongsToMany(User::class, 'student_user');
    }
}
