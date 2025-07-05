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
        Schema::create('readers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone');
            $table->string('email');
            $table->enum('marital_status', ['single', 'married', 'divorced', 'widow'])->nullable();
            $table->string('cpf')->nullable();
            $table->string('rg')->nullable();
            $table->string('nationality')->nullable();
            $table->date('birth_date');
            $table->enum('gender', ['M', 'F', 'O', 'N']);
            $table->string('profession')->nullable();
            $table->text('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('readers');
    }
};
