
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Address } from "@/types";

export function AddressForm({
    address,
    setAddress,
}: {
    address: Address|null,
    setAddress: React.Dispatch<React.SetStateAction<Address>>,
}) {
    const viaCepUrl = 'https://viacep.com.br/ws/';

    async function searchAddress() {
        const res = await fetch(`${viaCepUrl}${address?.cep}/json/`);
        const data = await res.json();
        setAddress(data);
    }

    return (
        <>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <Label htmlFor="cep" className="block mb-2">CEP</Label>
                    <Input id="cep"
                        value={address?.cep}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                              ...prev,
                              cep: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                    />
                </div>
                
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <Button type="button" onClick={searchAddress} className="cursor-pointer mt-5">Buscar Endereço</Button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-2/3 px-3 mb-2 md:mb-0">
                    <Label htmlFor="logradouro" className="block mb-2">Endereço <span className="text-red-400">*</span></Label>
                    <Input
                        id="logradouro"
                        value={address?.logradouro}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                              ...prev,
                              logradouro: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                        required
                    />
                </div>

                <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                    <Label htmlFor="numero" className="block mb-2">Número</Label>
                    <Input id="numero"
                        value={address?.numero}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                              ...prev,
                              numero: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <Label htmlFor="complemento" className="block mb-2">Complemento</Label>
                    <Input id="complemento"
                        value={address?.complemento}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                              ...prev,
                              complemento: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                    />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <Label htmlFor="bairro" className="block mb-2">Bairro <span className="text-red-400">*</span></Label>
                    <Input id="bairro"
                        value={address?.bairro}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                              ...prev,
                              bairro: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <Label htmlFor="localidade" className="block mb-2">Cidade <span className="text-red-400">*</span></Label>
                    <Input id="localidade"
                        value={address?.localidade}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                            ...prev,
                            localidade: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                        required
                    />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <Label htmlFor="estado" className="block mb-2">Estado <span className="text-red-400">*</span></Label>
                    <Input id="estado"
                        value={address?.estado}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAddress(prev => ({
                              ...prev,
                              estado: e.target.value,
                            }))
                        }
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                        required
                    />
                </div>
            </div>
        </>
    )
}
