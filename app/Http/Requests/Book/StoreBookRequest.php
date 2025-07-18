<?php

namespace App\Http\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'subtitle' => ['nullable', 'string'],
            'author' => ['required', 'string'],
            'additional_information' => ['nullable', 'string'],
            'inventory_number' => ['nullable', 'string'],
            'edition' => ['nullable', 'string'],
            'type' => ['required', 'string'], 
            'status' => ['required', 'string'],
        ];
    }
}
