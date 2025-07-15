<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Convert dedication field from enum to boolean
        Schema::table('students', function (Blueprint $table) {
            $table->boolean('dedication_new')->default(true)->after('dedication');
        });

        // Migrate data from enum to boolean
        DB::statement("UPDATE students SET dedication_new = CASE WHEN dedication = 'yes' THEN 1 ELSE 0 END");

        // Drop old column and rename new one
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('dedication');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->renameColumn('dedication_new', 'dedication');
        });

        // Convert active field from enum to boolean
        Schema::table('students', function (Blueprint $table) {
            $table->boolean('active_new')->default(true)->after('active');
        });

        // Migrate data from enum to boolean
        DB::statement("UPDATE students SET active_new = CASE WHEN active = 'yes' THEN 1 ELSE 0 END");

        // Drop old column and rename new one
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('active');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->renameColumn('active_new', 'active');
        });

        // Convert consultancy_before field from enum to boolean
        Schema::table('students', function (Blueprint $table) {
            $table->boolean('consultancy_before_new')->default(false)->after('consultancy_before');
        });

        // Migrate data from enum to boolean
        DB::statement("UPDATE students SET consultancy_before_new = CASE WHEN consultancy_before = 'yes' THEN 1 ELSE 0 END");

        // Drop old column and rename new one
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('consultancy_before');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->renameColumn('consultancy_before_new', 'consultancy_before');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Convert dedication field back to enum
        Schema::table('students', function (Blueprint $table) {
            $table->enum('dedication_old', ['yes', 'no'])->default('yes')->after('dedication');
        });

        // Migrate data from boolean to enum
        DB::statement("UPDATE students SET dedication_old = CASE WHEN dedication = 1 THEN 'yes' ELSE 'no' END");

        // Drop new column and rename old one
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('dedication');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->renameColumn('dedication_old', 'dedication');
        });

        // Convert active field back to enum
        Schema::table('students', function (Blueprint $table) {
            $table->enum('active_old', ['yes', 'no'])->default('yes')->after('active');
        });

        // Migrate data from boolean to enum
        DB::statement("UPDATE students SET active_old = CASE WHEN active = 1 THEN 'yes' ELSE 'no' END");

        // Drop new column and rename old one
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('active');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->renameColumn('active_old', 'active');
        });

        // Convert consultancy_before field back to enum
        Schema::table('students', function (Blueprint $table) {
            $table->enum('consultancy_before_old', ['yes', 'no'])->default('no')->after('consultancy_before');
        });

        // Migrate data from boolean to enum
        DB::statement("UPDATE students SET consultancy_before_old = CASE WHEN consultancy_before = 1 THEN 'yes' ELSE 'no' END");

        // Drop new column and rename old one
        Schema::table('students', function (Blueprint $table) {
            $table->dropColumn('consultancy_before');
        });

        Schema::table('students', function (Blueprint $table) {
            $table->renameColumn('consultancy_before_old', 'consultancy_before');
        });
    }
};
