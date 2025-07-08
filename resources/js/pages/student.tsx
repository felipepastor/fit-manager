import AppLayout from '@/layouts/app-layout';
import { Student, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Button, Table } from '@radix-ui/themes';
import { CheckSquare, PencilIcon, ThumbsDownIcon, ThumbsUpIcon, TrashIcon, X } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Aluno',
        href: '/aluno',
    },
];

export default function Aluno({ students }: { students: Student[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Aluno" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <Table.Root variant="surface">
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Altura</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Peso</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Objetivo</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Estilo de vida</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Dedicado</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Ações</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {students.map((student) => (
                            <Table.Row key={student.id} className='hover:bg-gray-100 cursor-pointer'>
                                <Table.RowHeaderCell>{student.name}</Table.RowHeaderCell>
                                <Table.Cell>{student.email}</Table.Cell>
                                <Table.Cell>{student.height}</Table.Cell>
                                <Table.Cell>{student.weight}</Table.Cell>
                                <Table.Cell>{student.objective}</Table.Cell>
                                <Table.Cell>{student.life_style}</Table.Cell>
                                <Table.Cell>
                                    {student.dedication === 'yes' ? <ThumbsUpIcon color='green' /> : <ThumbsDownIcon color='red' />}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
        </AppLayout>
    );
}
