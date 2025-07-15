import { Student } from '@/types';
import { useForm } from '@inertiajs/react';
import { Button, Card, Checkbox, Flex, Heading, Select, Text, TextArea, TextField } from '@radix-ui/themes';

export default function PublicQuestionnaire({ student }: { student: Student }) {
    const { data, setData, put, processing, errors } = useForm({
        nickname: student.nickname || '',
        birthday: student.birthday || '',
        cellphone: student.cellphone || '',
        job: student.job || '',
        height: student.height || '',
        weight: student.weight || '',
        body_fat: student.body_fat || '',
        objective: student.objective || '',
        goals: student.goals || '',
        life_style: student.life_style || '',
        dedication: student.dedication || false,
        active: student.active || false,
        smoke: student.smoke || '',
        drink: student.drink || '',
        drink_frequency: student.drink_frequency || '',
        consultancy_before: student.consultancy_before || false,
        training_frequency: student.training_frequency || '',
        training_content: student.training_content || '',
        training_history: student.training_history || '',
        like_training: student.like_training || '',
        favorite_training: student.favorite_training || '',
        training_days_week: student.training_days_week || [],
        training_affinity: student.training_affinity || '',
        training_description: student.training_description || '',
        training_extra_exercise: student.training_extra_exercise || '',
        training_extra_effort: student.training_extra_effort || '',
        training_extra_frequency_days: student.training_extra_frequency_days || [],
        running_practice: student.running_practice || '',
        running_frequency: student.running_frequency || '',
        running_frequency_days: student.running_frequency_days || [],
        running_affinity: student.running_affinity || '',
        running_description: student.running_description || '',
        do_diet: student.do_diet || '',
        diet_description: student.diet_description || '',
        orthopedic_issues: student.orthopedic_issues || '',
        training_specificity: student.training_specificity || '',
        sleeping_hours: student.sleeping_hours || '',
        tired_when_wake: student.tired_when_wake || '',
        observations: student.observations || '',
    });

    const handleInputChange = (field: keyof typeof data, value: string | number | boolean) => {
        setData(field, value);
    };

    const handleCheckboxChange = (field: keyof typeof data, checked: boolean) => {
        setData(field, checked);
    };

    const handleArrayChange = (field: keyof typeof data, value: string, checked: boolean) => {
        const currentArray = (data[field] as string[]) || [];
        const newArray = checked ? [...currentArray, value] : currentArray.filter((item) => item !== value);
        setData(field, newArray);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('student.questionnaire.update', student.id));
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="mx-auto max-w-4xl">
                <Card className="mb-6 p-6">
                    <Heading size="6" className="mb-2">
                        Questionário de Avaliação - {student.name}
                    </Heading>
                    <p className="mb-4 text-gray-600">
                        Por favor, preencha todas as informações solicitadas para que possamos criar um plano personalizado para você.
                    </p>
                    <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                        <Text className="text-sm text-blue-800">
                            <strong>Nota:</strong> Todos os campos marcados com <span className="text-red-500">*</span> são obrigatórios.
                        </Text>
                    </div>
                </Card>

                <form onSubmit={handleSubmit}>
                    <Card className="mb-6 p-6">
                        <Heading size="5" className="mb-4">
                            Informações Pessoais
                        </Heading>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Apelido <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root
                                    value={data.nickname}
                                    onChange={(e) => handleInputChange('nickname', e.target.value)}
                                    placeholder="Seu apelido"
                                />
                                {errors.nickname && (
                                    <Text color="red" size="1">
                                        {errors.nickname}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Data de Nascimento <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root type="date" value={data.birthday} onChange={(e) => handleInputChange('birthday', e.target.value)} />
                                {errors.birthday && (
                                    <Text color="red" size="1">
                                        {errors.birthday}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Celular <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root
                                    value={data.cellphone}
                                    onChange={(e) => handleInputChange('cellphone', e.target.value)}
                                    placeholder="(11) 99999-9999"
                                />
                                {errors.cellphone && (
                                    <Text color="red" size="1">
                                        {errors.cellphone}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Profissão <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root
                                    value={data.job}
                                    onChange={(e) => handleInputChange('job', e.target.value)}
                                    placeholder="Sua profissão"
                                />
                                {errors.job && (
                                    <Text color="red" size="1">
                                        {errors.job}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Altura (cm) <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root
                                    type="number"
                                    value={data.height}
                                    onChange={(e) => handleInputChange('height', e.target.value)}
                                    placeholder="170"
                                />
                                {errors.height && (
                                    <Text color="red" size="1">
                                        {errors.height}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Peso (kg) <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root
                                    type="number"
                                    value={data.weight}
                                    onChange={(e) => handleInputChange('weight', e.target.value)}
                                    placeholder="70"
                                />
                                {errors.weight && (
                                    <Text color="red" size="1">
                                        {errors.weight}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">
                                    Gordura Corporal (%) <span className="text-red-500">*</span>
                                </label>
                                <TextField.Root
                                    type="number"
                                    value={data.body_fat}
                                    onChange={(e) => handleInputChange('body_fat', e.target.value)}
                                    placeholder="15"
                                />
                                {errors.body_fat && (
                                    <Text color="red" size="1">
                                        {errors.body_fat}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Objetivo</label>
                            <TextArea
                                value={data.objective}
                                onChange={(e) => handleInputChange('objective', e.target.value)}
                                placeholder="Qual é seu objetivo principal?"
                                rows={3}
                            />
                            {errors.objective && (
                                <Text color="red" size="1">
                                    {errors.objective}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Metas</label>
                            <TextArea
                                value={data.goals}
                                onChange={(e) => handleInputChange('goals', e.target.value)}
                                placeholder="Quais são suas metas específicas?"
                                rows={3}
                            />
                            {errors.goals && (
                                <Text color="red" size="1">
                                    {errors.goals}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">
                                Estilo de Vida <span className="text-red-500">*</span>
                            </label>
                            <Select.Root value={data.life_style} onValueChange={(value) => handleInputChange('life_style', value)}>
                                <Select.Trigger placeholder="Selecione seu estilo de vida" />
                                <Select.Content>
                                    <Select.Item value="sedentary">Sedentário - Trabalho sentado, pouca atividade física</Select.Item>
                                    <Select.Item value="normal">Pouco Ativo - Alguma atividade física ocasional</Select.Item>
                                    <Select.Item value="active">Moderadamente Ativo - Exercício regular 1-3x por semana</Select.Item>
                                    <Select.Item value="very_active">Muito Ativo - Exercício intenso 4-6x por semana</Select.Item>
                                </Select.Content>
                            </Select.Root>
                            {errors.life_style && (
                                <Text color="red" size="1">
                                    {errors.life_style}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4 flex gap-4">
                            <Flex gap="2" align="center">
                                <Checkbox
                                    checked={!!data.dedication}
                                    onCheckedChange={(checked) => handleCheckboxChange('dedication', checked as boolean)}
                                />
                                <label className="text-sm">Tenho dedicação para treinar</label>
                            </Flex>
                            <Flex gap="2" align="center">
                                <Checkbox checked={!!data.active} onCheckedChange={(checked) => handleCheckboxChange('active', checked as boolean)} />
                                <label className="text-sm">Sou ativo fisicamente</label>
                            </Flex>
                            <Flex gap="2" align="center">
                                <Checkbox
                                    checked={!!data.consultancy_before}
                                    onCheckedChange={(checked) => handleCheckboxChange('consultancy_before', checked as boolean)}
                                />
                                <label className="text-sm">Já fiz consultoria antes</label>
                            </Flex>
                        </div>
                    </Card>

                    <Card className="mb-6 p-6">
                        <Heading size="5" className="mb-4">
                            Hábitos de Saúde
                        </Heading>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Fuma?</label>
                                <Select.Root value={data.smoke} onValueChange={(value) => handleInputChange('smoke', value)}>
                                    <Select.Trigger placeholder="Selecione uma opção" />
                                    <Select.Content>
                                        <Select.Item value="yes">Sim</Select.Item>
                                        <Select.Item value="no">Não</Select.Item>
                                        <Select.Item value="sometimes">Às vezes</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.smoke && (
                                    <Text color="red" size="1">
                                        {errors.smoke}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Bebe?</label>
                                <Select.Root value={data.drink} onValueChange={(value) => handleInputChange('drink', value)}>
                                    <Select.Trigger placeholder="Selecione uma opção" />
                                    <Select.Content>
                                        <Select.Item value="never">Nunca</Select.Item>
                                        <Select.Item value="rarely">Raramente</Select.Item>
                                        <Select.Item value="sometimes">Às vezes</Select.Item>
                                        <Select.Item value="often">Frequentemente</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.drink && (
                                    <Text color="red" size="1">
                                        {errors.drink}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Frequência de Bebida</label>
                            <Select.Root
                                value={data.drink_frequency?.toString()}
                                onValueChange={(value) => handleInputChange('drink_frequency', value)}
                            >
                                <Select.Trigger placeholder="Selecione a frequência" />
                                <Select.Content>
                                    <Select.Item value="1">Raramente</Select.Item>
                                    <Select.Item value="2">Ocasionalmente</Select.Item>
                                    <Select.Item value="3">Regularmente</Select.Item>
                                    <Select.Item value="4">Frequentemente</Select.Item>
                                    <Select.Item value="5">Diariamente</Select.Item>
                                </Select.Content>
                            </Select.Root>
                            {errors.drink_frequency && (
                                <Text color="red" size="1">
                                    {errors.drink_frequency}
                                </Text>
                            )}
                        </div>
                    </Card>

                    <Card className="mb-6 p-6">
                        <Heading size="5" className="mb-4">
                            Histórico de Treino
                        </Heading>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Frequência de Treino</label>
                                <Select.Root
                                    value={data.training_frequency?.toString()}
                                    onValueChange={(value) => handleInputChange('training_frequency', value)}
                                >
                                    <Select.Trigger placeholder="Selecione a frequência" />
                                    <Select.Content>
                                        <Select.Item value="1">Nunca treinei</Select.Item>
                                        <Select.Item value="2">Raramente</Select.Item>
                                        <Select.Item value="3">1-2x por semana</Select.Item>
                                        <Select.Item value="4">3-4x por semana</Select.Item>
                                        <Select.Item value="5">5+ vezes por semana</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.training_frequency && (
                                    <Text color="red" size="1">
                                        {errors.training_frequency}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Afinidade com Treino</label>
                                <Select.Root
                                    value={data.training_affinity?.toString()}
                                    onValueChange={(value) => handleInputChange('training_affinity', value)}
                                >
                                    <Select.Trigger placeholder="Selecione sua afinidade" />
                                    <Select.Content>
                                        <Select.Item value="1">Não gosto</Select.Item>
                                        <Select.Item value="2">Indiferente</Select.Item>
                                        <Select.Item value="3">Gosto um pouco</Select.Item>
                                        <Select.Item value="4">Gosto muito</Select.Item>
                                        <Select.Item value="5">Amo treinar</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.training_affinity && (
                                    <Text color="red" size="1">
                                        {errors.training_affinity}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Conteúdo do Treino</label>
                            <Select.Root value={data.training_content} onValueChange={(value) => handleInputChange('training_content', value)}>
                                <Select.Trigger placeholder="Selecione o tipo de treino" />
                                <Select.Content>
                                    <Select.Item value="bodybuilding">Musculação</Select.Item>
                                    <Select.Item value="cardio">Cardio</Select.Item>
                                    <Select.Item value="functional">Funcional</Select.Item>
                                    <Select.Item value="crossfit">Crossfit</Select.Item>
                                    <Select.Item value="pilates">Pilates</Select.Item>
                                </Select.Content>
                            </Select.Root>
                            {errors.training_content && (
                                <Text color="red" size="1">
                                    {errors.training_content}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Histórico de Treino</label>
                            <TextArea
                                value={data.training_history}
                                onChange={(e) => handleInputChange('training_history', e.target.value)}
                                placeholder="Descreva seu histórico de treinos"
                                rows={3}
                            />
                            {errors.training_history && (
                                <Text color="red" size="1">
                                    {errors.training_history}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Gosta de Treinar?</label>
                            <Select.Root value={data.like_training} onValueChange={(value) => handleInputChange('like_training', value)}>
                                <Select.Trigger placeholder="Selecione uma opção" />
                                <Select.Content>
                                    <Select.Item value="yes">Sim</Select.Item>
                                    <Select.Item value="no">Não</Select.Item>
                                    <Select.Item value="sometimes">Às vezes</Select.Item>
                                </Select.Content>
                            </Select.Root>
                            {errors.like_training && (
                                <Text color="red" size="1">
                                    {errors.like_training}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Treino Favorito</label>
                            <TextField.Root
                                value={data.favorite_training}
                                onChange={(e) => handleInputChange('favorite_training', e.target.value)}
                                placeholder="Qual seu treino favorito?"
                            />
                            {errors.favorite_training && (
                                <Text color="red" size="1">
                                    {errors.favorite_training}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Dias de Treino na Semana</label>
                            <div className="flex flex-wrap gap-2">
                                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                                    <Flex key={day} gap="2" align="center">
                                        <Checkbox
                                            checked={data.training_days_week.includes(day)}
                                            onCheckedChange={(checked) => handleArrayChange('training_days_week', day, checked as boolean)}
                                        />
                                        <label className="text-sm">{day}</label>
                                    </Flex>
                                ))}
                            </div>
                            {errors.training_days_week && (
                                <Text color="red" size="1">
                                    {errors.training_days_week}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Descrição do Treino</label>
                            <TextArea
                                value={data.training_description}
                                onChange={(e) => handleInputChange('training_description', e.target.value)}
                                placeholder="Descreva como você treina"
                                rows={3}
                            />
                            {errors.training_description && (
                                <Text color="red" size="1">
                                    {errors.training_description}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Exercício Extra no Treino</label>
                                <TextField.Root
                                    value={data.training_extra_exercise}
                                    onChange={(e) => handleInputChange('training_extra_exercise', e.target.value)}
                                    placeholder="Faz exercícios extras?"
                                />
                                {errors.training_extra_exercise && (
                                    <Text color="red" size="1">
                                        {errors.training_extra_exercise}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Esforço Extra no Treino</label>
                                <Select.Root
                                    value={data.training_extra_effort?.toString()}
                                    onValueChange={(value) => handleInputChange('training_extra_effort', value)}
                                >
                                    <Select.Trigger placeholder="Selecione o esforço" />
                                    <Select.Content>
                                        <Select.Item value="1">Mínimo</Select.Item>
                                        <Select.Item value="2">Baixo</Select.Item>
                                        <Select.Item value="3">Médio</Select.Item>
                                        <Select.Item value="4">Alto</Select.Item>
                                        <Select.Item value="5">Máximo</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.training_extra_effort && (
                                    <Text color="red" size="1">
                                        {errors.training_extra_effort}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Dias de Frequência Extra no Treino</label>
                            <div className="flex flex-wrap gap-2">
                                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                                    <Flex key={day} gap="2" align="center">
                                        <Checkbox
                                            checked={data.training_extra_frequency_days.includes(day)}
                                            onCheckedChange={(checked) => handleArrayChange('training_extra_frequency_days', day, checked as boolean)}
                                        />
                                        <label className="text-sm">{day}</label>
                                    </Flex>
                                ))}
                            </div>
                            {errors.training_extra_frequency_days && (
                                <Text color="red" size="1">
                                    {errors.training_extra_frequency_days}
                                </Text>
                            )}
                        </div>
                    </Card>

                    <Card className="mb-6 p-6">
                        <Heading size="5" className="mb-4">
                            Corrida
                        </Heading>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Pratica Corrida?</label>
                                <TextField.Root
                                    value={data.running_practice}
                                    onChange={(e) => handleInputChange('running_practice', e.target.value)}
                                    placeholder="Sim/Não/Explique"
                                />
                                {errors.running_practice && (
                                    <Text color="red" size="1">
                                        {errors.running_practice}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Frequência de Corrida</label>
                                <Select.Root
                                    value={data.running_frequency?.toString()}
                                    onValueChange={(value) => handleInputChange('running_frequency', value)}
                                >
                                    <Select.Trigger placeholder="Selecione a frequência" />
                                    <Select.Content>
                                        <Select.Item value="1">Nunca</Select.Item>
                                        <Select.Item value="2">Raramente</Select.Item>
                                        <Select.Item value="3">1-2x por semana</Select.Item>
                                        <Select.Item value="4">3-4x por semana</Select.Item>
                                        <Select.Item value="5">5+ vezes por semana</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.running_frequency && (
                                    <Text color="red" size="1">
                                        {errors.running_frequency}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Dias de Frequência de Corrida</label>
                            <div className="flex flex-wrap gap-2">
                                {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'].map((day) => (
                                    <Flex key={day} gap="2" align="center">
                                        <Checkbox
                                            checked={data.running_frequency_days.includes(day)}
                                            onCheckedChange={(checked) => handleArrayChange('running_frequency_days', day, checked as boolean)}
                                        />
                                        <label className="text-sm">{day}</label>
                                    </Flex>
                                ))}
                            </div>
                            {errors.running_frequency_days && (
                                <Text color="red" size="1">
                                    {errors.running_frequency_days}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Afinidade com Corrida</label>
                                <Select.Root
                                    value={data.running_affinity?.toString()}
                                    onValueChange={(value) => handleInputChange('running_affinity', value)}
                                >
                                    <Select.Trigger placeholder="Selecione sua afinidade" />
                                    <Select.Content>
                                        <Select.Item value="1">Não gosto</Select.Item>
                                        <Select.Item value="2">Indiferente</Select.Item>
                                        <Select.Item value="3">Gosto um pouco</Select.Item>
                                        <Select.Item value="4">Gosto muito</Select.Item>
                                        <Select.Item value="5">Amo correr</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.running_affinity && (
                                    <Text color="red" size="1">
                                        {errors.running_affinity}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Descrição da Corrida</label>
                            <TextArea
                                value={data.running_description}
                                onChange={(e) => handleInputChange('running_description', e.target.value)}
                                placeholder="Descreva sua experiência com corrida"
                                rows={3}
                            />
                            {errors.running_description && (
                                <Text color="red" size="1">
                                    {errors.running_description}
                                </Text>
                            )}
                        </div>
                    </Card>

                    <Card className="mb-6 p-6">
                        <Heading size="5" className="mb-4">
                            Nutrição e Saúde
                        </Heading>

                        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-1 block text-sm font-medium">Faz Dieta?</label>
                                <Select.Root value={data.do_diet} onValueChange={(value) => handleInputChange('do_diet', value)}>
                                    <Select.Trigger placeholder="Selecione uma opção" />
                                    <Select.Content>
                                        <Select.Item value="yes">Sim</Select.Item>
                                        <Select.Item value="no">Não</Select.Item>
                                        <Select.Item value="sometimes">Às vezes</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.do_diet && (
                                    <Text color="red" size="1">
                                        {errors.do_diet}
                                    </Text>
                                )}
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium">Horas de Sono</label>
                                <Select.Root
                                    value={data.sleeping_hours?.toString()}
                                    onValueChange={(value) => handleInputChange('sleeping_hours', value)}
                                >
                                    <Select.Trigger placeholder="Selecione as horas" />
                                    <Select.Content>
                                        <Select.Item value="1">Menos de 5h</Select.Item>
                                        <Select.Item value="2">5-6h</Select.Item>
                                        <Select.Item value="3">6-7h</Select.Item>
                                        <Select.Item value="4">7-8h</Select.Item>
                                        <Select.Item value="5">8+ horas</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                                {errors.sleeping_hours && (
                                    <Text color="red" size="1">
                                        {errors.sleeping_hours}
                                    </Text>
                                )}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Descrição da Dieta</label>
                            <TextArea
                                value={data.diet_description}
                                onChange={(e) => handleInputChange('diet_description', e.target.value)}
                                placeholder="Descreva sua dieta atual"
                                rows={3}
                            />
                            {errors.diet_description && (
                                <Text color="red" size="1">
                                    {errors.diet_description}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Problemas Ortopédicos</label>
                            <TextArea
                                value={data.orthopedic_issues}
                                onChange={(e) => handleInputChange('orthopedic_issues', e.target.value)}
                                placeholder="Tem algum problema ortopédico?"
                                rows={3}
                            />
                            {errors.orthopedic_issues && (
                                <Text color="red" size="1">
                                    {errors.orthopedic_issues}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Especificidade do Treino</label>
                            <TextArea
                                value={data.training_specificity}
                                onChange={(e) => handleInputChange('training_specificity', e.target.value)}
                                placeholder="Alguma especificidade para o treino?"
                                rows={3}
                            />
                            {errors.training_specificity && (
                                <Text color="red" size="1">
                                    {errors.training_specificity}
                                </Text>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Cansado ao Acordar?</label>
                            <Select.Root value={data.tired_when_wake} onValueChange={(value) => handleInputChange('tired_when_wake', value)}>
                                <Select.Trigger placeholder="Selecione uma opção" />
                                <Select.Content>
                                    <Select.Item value="yes">Sim</Select.Item>
                                    <Select.Item value="no">Não</Select.Item>
                                    <Select.Item value="sometimes">Às vezes</Select.Item>
                                </Select.Content>
                            </Select.Root>
                            {errors.tired_when_wake && (
                                <Text color="red" size="1">
                                    {errors.tired_when_wake}
                                </Text>
                            )}
                        </div>
                    </Card>

                    <Card className="mb-6 p-6">
                        <Heading size="5" className="mb-4">
                            Observações Finais
                        </Heading>

                        <div className="mb-4">
                            <label className="mb-1 block text-sm font-medium">Observações</label>
                            <TextArea
                                value={data.observations}
                                onChange={(e) => handleInputChange('observations', e.target.value)}
                                placeholder="Alguma observação adicional que gostaria de compartilhar?"
                                rows={4}
                            />
                            {errors.observations && (
                                <Text color="red" size="1">
                                    {errors.observations}
                                </Text>
                            )}
                        </div>
                    </Card>

                    <div className="flex justify-center">
                        <Button type="submit" disabled={processing} size="3">
                            {processing ? 'Enviando...' : 'Enviar Questionário'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
