<?php

namespace App\Http\Requests\Reader;

use Illuminate\Foundation\Http\FormRequest;

class StoreReaderRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'email' => ['required', 'string'],
            'marital_status' => ['nullable', 'string'],
            'cpf' => ['nullable', 'string'],
            'rg' => ['nullable', 'string'],
            'nationality' => ['nullable', 'string'],
            'birth_date' => ['required', 'string'],
            'gender' => ['required', 'string'],
            'profession' => ['nullable', 'string'],
            'address' => ['required', 'array'],
        ];
    }
}
