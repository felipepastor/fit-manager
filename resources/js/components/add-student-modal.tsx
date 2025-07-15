import type { InertiaStudentResponse } from '@/types';
import { useForm } from '@inertiajs/react';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export default function AddStudentModal({ dialogTrigger }: { dialogTrigger: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const { data, setData, post, processing, errors } = useForm<Required<{ name: string; email: string }>>({
        name: '',
        email: '',
    });
    const [accessToken, setAccessToken] = useState<string | null>('');

    const hasErrors = Object.keys(errors).length > 0;

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('student.store'), {
            onFinish: (response) => {
                console.log('finish', response);
                setShowResult(true);
            },
            onSuccess: (response) => {
                console.log('success', response);
                // Access the student data from the response props
                const studentResponse = response as InertiaStudentResponse;
                const student = studentResponse.props?.student;
                if (student?.access_token) {
                    setAccessToken(student.access_token);
                }
            },
            onError: () => {
                console.log(errors);
            },
        });
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>{dialogTrigger}</Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Adicionar Aluno</Dialog.Title>

                {showResult && !hasErrors ? (
                    <Flex direction="column" gap="3" mt="4" justify="center">
                        <Text>Aluno adicionado com sucesso</Text>
                        <Text>Compartilhe o link abaixo com o aluno para que ele possa acessar o sistema:</Text>
                        <Text weight="bold">
                            <strong>http://localhost:8000/acesso/{accessToken}</strong>
                        </Text>
                        <Dialog.Close>
                            <Button variant="soft" color="gray" onClick={() => setShowResult(false)}>
                                Fechar
                            </Button>
                        </Dialog.Close>
                    </Flex>
                ) : (
                    <form onSubmit={submit}>
                        <Flex direction="column" gap="3">
                            <label htmlFor="name">
                                <Text as="div" size="2" weight="bold">
                                    Nome
                                </Text>
                            </label>
                            <TextField.Root
                                id="name"
                                placeholder="Nome do aluno"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <Text color="red" size="1">
                                {errors.name}
                            </Text>
                            <label htmlFor="email">
                                <Text as="div" size="2" weight="bold">
                                    Email
                                </Text>
                            </label>
                            <TextField.Root
                                id="email"
                                placeholder="Email do aluno"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <Text color="red" size="1">
                                {errors.email}
                            </Text>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray" disabled={processing}>
                                    Cancelar
                                </Button>
                            </Dialog.Close>

                            <Button type="submit" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Salvar
                            </Button>
                        </Flex>
                    </form>
                )}
            </Dialog.Content>
        </Dialog.Root>
    );
}
