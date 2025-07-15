import AppLayout from '@/layouts/app-layout';
import { Student } from '@/types';
import { Blockquote, Heading, Table } from '@radix-ui/themes';

export default function StudentShow({ student }: { student: Student }) {
    const studentFields = [
        { name: 'Nome', value: student.name },
        { name: 'Email', value: student.email },
        { name: 'Apelido', value: student.nickname },
        { name: 'Data de Nascimento', value: student.birthday },
        { name: 'Celular', value: student.cellphone },
        { name: 'Profissão', value: student.job },
        { name: 'Altura', value: student.height ? `${student.height}cm` : null },
        { name: 'Peso', value: student.weight ? `${student.weight}kg` : null },
        { name: 'Gordura Corporal', value: student.body_fat ? `${student.body_fat}%` : null },
        { name: 'Objetivo', value: student.objective },
        { name: 'Metas', value: student.goals },
        {
            name: 'Estilo de Vida',
            value:
                student.life_style === 'sedentary'
                    ? 'Sedentário'
                    : student.life_style === 'normal'
                      ? 'Normal'
                      : student.life_style === 'active'
                        ? 'Ativo'
                        : student.life_style === 'very_active'
                          ? 'Muito Ativo'
                          : student.life_style,
        },
        { name: 'Dedicação', value: student.dedication ? 'Sim' : student.dedication === false ? 'Não' : null },
        { name: 'Ativo', value: student.active ? 'Sim' : student.active === false ? 'Não' : null },
        {
            name: 'Fuma',
            value: student.smoke === 'yes' ? 'Sim' : student.smoke === 'no' ? 'Não' : student.smoke === 'sometimes' ? 'Às vezes' : student.smoke,
        },
        {
            name: 'Bebe',
            value:
                student.drink === 'never'
                    ? 'Nunca'
                    : student.drink === 'rarely'
                      ? 'Raramente'
                      : student.drink === 'sometimes'
                        ? 'Às vezes'
                        : student.drink === 'often'
                          ? 'Frequentemente'
                          : student.drink,
        },
        { name: 'Frequência de Bebida', value: student.drink_frequency },
        { name: 'Já Fez Consultoria', value: student.consultancy_before ? 'Sim' : student.consultancy_before === false ? 'Não' : null },
        { name: 'Frequência de Treino', value: student.training_frequency },
        {
            name: 'Conteúdo do Treino',
            value:
                student.training_content === 'bodybuilding'
                    ? 'Musculação'
                    : student.training_content === 'cardio'
                      ? 'Cardio'
                      : student.training_content === 'functional'
                        ? 'Funcional'
                        : student.training_content === 'crossfit'
                          ? 'Crossfit'
                          : student.training_content === 'pilates'
                            ? 'Pilates'
                            : student.training_content,
        },
        { name: 'Histórico de Treino', value: student.training_history },
        {
            name: 'Gosta de Treinar',
            value:
                student.like_training === 'yes'
                    ? 'Sim'
                    : student.like_training === 'no'
                      ? 'Não'
                      : student.like_training === 'sometimes'
                        ? 'Às vezes'
                        : student.like_training,
        },
        { name: 'Treino Favorito', value: student.favorite_training },
        { name: 'Dias de Treino na Semana', value: student.training_days_week?.join(', ') },
        { name: 'Afinidade com Treino', value: student.training_affinity },
        { name: 'Descrição do Treino', value: student.training_description },
        { name: 'Exercício Extra no Treino', value: student.training_extra_exercise },
        { name: 'Esforço Extra no Treino', value: student.training_extra_effort },
        { name: 'Dias de Frequência Extra no Treino', value: student.training_extra_frequency_days?.join(', ') },
        { name: 'Pratica Corrida', value: student.running_practice },
        { name: 'Frequência de Corrida', value: student.running_frequency },
        { name: 'Dias de Frequência de Corrida', value: student.running_frequency_days?.join(', ') },
        { name: 'Afinidade com Corrida', value: student.running_affinity },
        { name: 'Descrição da Corrida', value: student.running_description },
        {
            name: 'Faz Dieta',
            value:
                student.do_diet === 'yes' ? 'Sim' : student.do_diet === 'no' ? 'Não' : student.do_diet === 'sometimes' ? 'Às vezes' : student.do_diet,
        },
        { name: 'Descrição da Dieta', value: student.diet_description },
        { name: 'Problemas Ortopédicos', value: student.orthopedic_issues },
        { name: 'Especificidade do Treino', value: student.training_specificity },
        { name: 'Horas de Sono', value: student.sleeping_hours },
        {
            name: 'Cansado ao Acordar',
            value:
                student.tired_when_wake === 'yes'
                    ? 'Sim'
                    : student.tired_when_wake === 'no'
                      ? 'Não'
                      : student.tired_when_wake === 'sometimes'
                        ? 'Às vezes'
                        : student.tired_when_wake,
        },
        { name: 'Observações', value: student.observations },
    ];

    console.log(window.location);

    return (
        <AppLayout>
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Heading>{student.name}</Heading>
                <Blockquote>
                    Link para o aluno responder o questionario <br /> <strong>{`${window.location.origin}/accesso/${student.access_token}`}</strong>
                </Blockquote>
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell colSpan={2}>Informações do Aluno</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {studentFields.map((field, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className="w-40 truncate font-bold">{field.name}</Table.Cell>
                                <Table.Cell>{field.value || '-'}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
        </AppLayout>
    );
}
