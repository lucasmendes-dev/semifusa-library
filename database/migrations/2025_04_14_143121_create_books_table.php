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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->string('author');
            $table->text('additional_information')->nullable();
            $table->integer('inventory_number')->nullable();
            $table->string('edition');
            $table->enum('type', ['main_library', 'comics', 'geloteca']);
            $table->enum('status', ['available', 'unavailable', 'loaned']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
