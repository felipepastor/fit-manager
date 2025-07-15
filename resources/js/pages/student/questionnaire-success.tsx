import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { CheckCircle } from 'lucide-react';

export default function QuestionnaireSuccess() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center">
                    <div className="mb-6 flex justify-center">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>

                    <Heading size="6" className="mb-4 text-green-600">
                        Questionário Enviado com Sucesso!
                    </Heading>

                    <Text className="mb-6 text-gray-600">
                        Obrigado por preencher o questionário. Seus dados foram salvos com sucesso e serão analisados pelo seu personal trainer.
                    </Text>

                    <Text className="mb-6 text-sm text-gray-500">
                        Em breve você receberá um plano personalizado baseado nas informações fornecidas.
                    </Text>

                    <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
                        <Text className="text-sm text-blue-800">
                            <strong>Dica:</strong> Mantenha-se ativo e siga as orientações do seu personal trainer para alcançar seus objetivos!
                        </Text>
                    </div>

                    <Button variant="soft" color="gray" onClick={() => window.close()} className="w-full">
                        Fechar Página
                    </Button>
                </div>
            </Card>
        </div>
    );
}
