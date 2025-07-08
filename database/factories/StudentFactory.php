<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Student::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $animals = ['Lion', 'Tiger', 'Bear', 'Wolf', 'Eagle', 'Shark', 'Dolphin', 'Elephant', 'Giraffe', 'Zebra'];
        $colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Gray'];
        $names = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Lucia', 'Fernando', 'Sofia', 'Miguel', 'Isabella'];

        return [
            'id' => Str::uuid(), // Generate UUID
            'email' => fake()->unique()->safeEmail(),
            'name' => fake()->randomElement($names) . ' ' . fake()->randomElement($colors) . ' ' . fake()->randomElement($animals),
            'nickname' => fake()->randomElement($animals),
            'birthday' => fake()->date('d/m/Y', '-18 years'),
            'cellphone' => fake()->numerify('61########'),
            'job' => fake()->randomElement(['Desenvolvedor', 'Professor', 'Médico', 'Advogado', 'Engenheiro', 'Designer']),

            // Physical Measurements
            'height' => fake()->numberBetween(150, 200),
            'weight' => fake()->numberBetween(50, 120),
            'body_fat' => fake()->numberBetween(10, 35),

            // Goals and Objectives
            'objective' => fake()->randomElement([
                'Eu quero secar e ganhar mais força física',
                'Quero ganhar massa muscular',
                'Quero melhorar minha resistência',
                'Quero perder peso de forma saudável',
                'Quero melhorar minha performance esportiva'
            ]),

            // Lifestyle
            'life_style' => fake()->randomElement(['sedentary', 'normal', 'active', 'very_active']),
            'dedication' => fake()->randomElement(['yes', 'no']),
            'active' => fake()->randomElement(['yes', 'no']),
            'smoke' => fake()->randomElement(['yes', 'no', 'sometimes']),
            'drink' => fake()->randomElement(['never', 'rarely', 'sometimes', 'often']),
            'drink_frequency' => fake()->numberBetween(0, 7),
            'consultancy_before' => fake()->randomElement(['yes', 'no']),

            // Training Information
            'training_frequency' => fake()->numberBetween(0, 7),
            'training_content' => fake()->randomElement(['bodybuilding', 'cardio', 'functional', 'crossfit', 'pilates']),
            'training_history' => fake()->paragraph(),
            'like_training' => fake()->randomElement(['yes', 'no', 'sometimes']),
            'favorite_training' => fake()->sentence(),
            'training_days_week' => json_encode(fake()->randomElements(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], fake()->numberBetween(1, 5))),

            // Running Information
            'running_practice' => fake()->randomElement([
                'Nunca pratiquei mas estou animado para começar',
                'Já pratiquei anteriormente',
                'Pratico regularmente',
                'Não tenho interesse'
            ]),
            'running_frequency' => fake()->numberBetween(0, 7),
            'running_frequency_days' => json_encode(fake()->randomElements(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], fake()->numberBetween(0, 3))),
            'running_affinity' => fake()->numberBetween(1, 5),
            'running_description' => fake()->paragraph(),

            // Training Affinity and Description
            'training_affinity' => fake()->numberBetween(1, 5),
            'training_description' => fake()->paragraph(),
            'training_extra_exercise' => fake()->paragraph(),
            'training_extra_effort' => fake()->numberBetween(1, 5),
            'training_extra_frequency_days' => json_encode(fake()->randomElements(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'], fake()->numberBetween(0, 2))),

            // Diet and Health
            'do_diet' => fake()->randomElement(['yes', 'no', 'sometimes']),
            'diet_description' => fake()->paragraph(),
            'orthopedic_issues' => fake()->optional(0.3)->paragraph(),
            'training_specificity' => fake()->optional(0.2)->paragraph(),
            'sleeping_hours' => fake()->numberBetween(4, 12),
            'tired_when_wake' => fake()->randomElement(['yes', 'no', 'sometimes']),

            // Goals and Observations
            'goals' => fake()->paragraph(),
            'observations' => fake()->optional(0.4)->paragraphs(3, true),

            // Standard User Fields
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }
}
