<?php

namespace App\Services;


class AddressAPIService 
{
    private $apiLink;

    public function __construct()
    {
        $this->apiLink = 'https://viacep.com.br/ws/';
    }

    public function fetchData(string $cep): array
    {
        $fullUrl = $this->apiLink . $cep . "/json/";
        $response = file_get_contents($fullUrl);
        if ($response !== false) {
            $data = json_decode($response, true);
            return $data;
        }
        return [];
    }
}
