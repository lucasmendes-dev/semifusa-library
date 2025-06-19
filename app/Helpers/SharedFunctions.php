<?php

function generateHexId(): string
{
    $characters = '0123456789abcdef';
    $id = '';
    for ($i = 0; $i < 6; $i++) {
        $id .= $characters[random_int(0, 15)];
    }
    return $id;
}
