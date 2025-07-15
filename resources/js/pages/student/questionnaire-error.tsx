import { Button, Card, Heading, Text } from '@radix-ui/themes';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function QuestionnaireError() {
    const handleRetry = () => {
        window.history.back();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center">
                    <div className="mb-6 flex justify-center">
                        <AlertCircle className="h-16 w-16 text-red-500" />
                    </div>

                    <Heading size="6" className="mb-4 text-red-600">
                        Erro ao Enviar Questionário
                    </Heading>

                    <Text className="mb-6 text-gray-600">Ocorreu um erro ao enviar seu questionário. Por favor, tente novamente.</Text>

                    <Text className="mb-6 text-sm text-gray-500">Se o problema persistir, entre em contato com seu personal trainer.</Text>

                    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                        <Text className="text-sm text-red-800">
                            <strong>Dica:</strong> Verifique sua conexão com a internet e tente novamente.
                        </Text>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="soft" color="gray" onClick={() => window.close()} className="flex-1">
                            Fechar
                        </Button>

                        <Button onClick={handleRetry} className="flex-1">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Tentar Novamente
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
