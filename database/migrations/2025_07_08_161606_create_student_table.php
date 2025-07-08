<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();

            // Personal Information
            $table->string('email')->unique();
            $table->string('name');
            $table->string('nickname')->nullable();
            $table->string('birthday')->nullable();
            $table->string('cellphone')->nullable();
            $table->string('job')->nullable();

            // Physical Measurements
            $table->integer('height')->nullable();
            $table->integer('weight')->nullable();
            $table->integer('body_fat')->nullable();

            // Goals and Objectives
            $table->text('objective')->nullable();

            // Lifestyle
            $table->enum('life_style', ['sedentary', 'normal', 'active', 'very_active'])->default('normal');
            $table->enum('dedication', ['yes', 'no'])->default('yes');
            $table->enum('active', ['yes', 'no'])->default('yes');
            $table->enum('smoke', ['yes', 'no', 'sometimes'])->default('no');
            $table->enum('drink', ['never', 'rarely', 'sometimes', 'often'])->default('never');
            $table->integer('drink_frequency')->default(0);
            $table->enum('consultancy_before', ['yes', 'no'])->default('no');

            // Training Information
            $table->integer('training_frequency')->default(0);
            $table->enum('training_content', ['bodybuilding', 'cardio', 'functional', 'crossfit', 'pilates'])->nullable();
            $table->text('training_history')->nullable();
            $table->enum('like_training', ['yes', 'no', 'sometimes'])->default('yes');
            $table->text('favorite_training')->nullable();
            $table->json('training_days_week')->nullable();

            // Running Information
            $table->text('running_practice')->nullable();
            $table->integer('running_frequency')->default(0);
            $table->json('running_frequency_days')->nullable();
            $table->integer('running_affinity')->default(1);
            $table->text('running_description')->nullable();

            // Training Affinity and Description
            $table->integer('training_affinity')->default(1);
            $table->text('training_description')->nullable();
            $table->text('training_extra_exercise')->nullable();
            $table->integer('training_extra_effort')->default(1);
            $table->json('training_extra_frequency_days')->nullable();

            // Diet and Health
            $table->enum('do_diet', ['yes', 'no', 'sometimes'])->default('no');
            $table->text('diet_description')->nullable();
            $table->text('orthopedic_issues')->nullable();
            $table->text('training_specificity')->nullable();
            $table->integer('sleeping_hours')->default(8);
            $table->enum('tired_when_wake', ['yes', 'no', 'sometimes'])->default('no');

            // Goals and Observations
            $table->text('goals')->nullable();
            $table->text('observations')->nullable();

            // Standard User Fields
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
