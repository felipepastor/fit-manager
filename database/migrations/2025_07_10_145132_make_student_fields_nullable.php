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
        Schema::table('students', function (Blueprint $table) {
            // Make all fields nullable except id, email, access_token, name
            $table->string('nickname')->nullable()->change();
            $table->string('birthday')->nullable()->change();
            $table->string('cellphone')->nullable()->change();
            $table->string('job')->nullable()->change();
            $table->integer('height')->nullable()->change();
            $table->integer('weight')->nullable()->change();
            $table->integer('body_fat')->nullable()->change();
            $table->text('objective')->nullable()->change();
            $table->enum('life_style', ['sedentary', 'normal', 'active', 'very_active'])->nullable()->change();
            $table->boolean('dedication')->nullable()->change();
            $table->boolean('active')->nullable()->change();
            $table->enum('smoke', ['yes', 'no', 'sometimes'])->nullable()->change();
            $table->enum('drink', ['never', 'rarely', 'sometimes', 'often'])->nullable()->change();
            $table->integer('drink_frequency')->nullable()->change();
            $table->boolean('consultancy_before')->nullable()->change();
            $table->integer('training_frequency')->nullable()->change();
            $table->enum('training_content', ['bodybuilding', 'cardio', 'functional', 'crossfit', 'pilates'])->nullable()->change();
            $table->text('training_history')->nullable()->change();
            $table->enum('like_training', ['yes', 'no', 'sometimes'])->nullable()->change();
            $table->text('favorite_training')->nullable()->change();
            $table->json('training_days_week')->nullable()->change();
            $table->text('running_practice')->nullable()->change();
            $table->integer('running_frequency')->nullable()->change();
            $table->json('running_frequency_days')->nullable()->change();
            $table->integer('running_affinity')->nullable()->change();
            $table->text('running_description')->nullable()->change();
            $table->integer('training_affinity')->nullable()->change();
            $table->text('training_description')->nullable()->change();
            $table->text('training_extra_exercise')->nullable()->change();
            $table->integer('training_extra_effort')->nullable()->change();
            $table->json('training_extra_frequency_days')->nullable()->change();
            $table->enum('do_diet', ['yes', 'no', 'sometimes'])->nullable()->change();
            $table->text('diet_description')->nullable()->change();
            $table->text('orthopedic_issues')->nullable()->change();
            $table->text('training_specificity')->nullable()->change();
            $table->integer('sleeping_hours')->nullable()->change();
            $table->enum('tired_when_wake', ['yes', 'no', 'sometimes'])->nullable()->change();
            $table->text('goals')->nullable()->change();
            $table->text('observations')->nullable()->change();
            $table->timestamp('email_verified_at')->nullable()->change();
            $table->timestamp('answered_at')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('students', function (Blueprint $table) {
            // Revert to non-nullable where appropriate
            $table->string('nickname')->nullable(false)->change();
            $table->string('birthday')->nullable(false)->change();
            $table->string('cellphone')->nullable(false)->change();
            $table->string('job')->nullable(false)->change();
            $table->integer('height')->nullable(false)->change();
            $table->integer('weight')->nullable(false)->change();
            $table->integer('body_fat')->nullable(false)->change();
            $table->text('objective')->nullable(false)->change();
            $table->enum('life_style', ['sedentary', 'normal', 'active', 'very_active'])->nullable(false)->change();
            $table->boolean('dedication')->nullable(false)->change();
            $table->boolean('active')->nullable(false)->change();
            $table->enum('smoke', ['yes', 'no', 'sometimes'])->nullable(false)->change();
            $table->enum('drink', ['never', 'rarely', 'sometimes', 'often'])->nullable(false)->change();
            $table->integer('drink_frequency')->nullable(false)->change();
            $table->boolean('consultancy_before')->nullable(false)->change();
            $table->integer('training_frequency')->nullable(false)->change();
            $table->enum('training_content', ['bodybuilding', 'cardio', 'functional', 'crossfit', 'pilates'])->nullable(false)->change();
            $table->text('training_history')->nullable(false)->change();
            $table->enum('like_training', ['yes', 'no', 'sometimes'])->nullable(false)->change();
            $table->text('favorite_training')->nullable(false)->change();
            $table->json('training_days_week')->nullable(false)->change();
            $table->text('running_practice')->nullable(false)->change();
            $table->integer('running_frequency')->nullable(false)->change();
            $table->json('running_frequency_days')->nullable(false)->change();
            $table->integer('running_affinity')->nullable(false)->change();
            $table->text('running_description')->nullable(false)->change();
            $table->integer('training_affinity')->nullable(false)->change();
            $table->text('training_description')->nullable(false)->change();
            $table->text('training_extra_exercise')->nullable(false)->change();
            $table->integer('training_extra_effort')->nullable(false)->change();
            $table->json('training_extra_frequency_days')->nullable(false)->change();
            $table->enum('do_diet', ['yes', 'no', 'sometimes'])->nullable(false)->change();
            $table->text('diet_description')->nullable(false)->change();
            $table->text('orthopedic_issues')->nullable(false)->change();
            $table->text('training_specificity')->nullable(false)->change();
            $table->integer('sleeping_hours')->nullable(false)->change();
            $table->enum('tired_when_wake', ['yes', 'no', 'sometimes'])->nullable(false)->change();
            $table->text('goals')->nullable(false)->change();
            $table->text('observations')->nullable(false)->change();
            $table->timestamp('email_verified_at')->nullable(false)->change();
            $table->timestamp('answered_at')->nullable(false)->change();
        });
    }
};
