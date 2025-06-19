<?php

use App\Models\User;

test('guests are redirected to the login page', function () {
    $this->get('/loans')->assertRedirect('/login');
});

test('authenticated users can visit the loans', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/loans')->assertOk();
});