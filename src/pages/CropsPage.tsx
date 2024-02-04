import PageLayout from '../components/PageLayout';
import SortableCropsTable from '../components/SortableCropsTable';

export default function CropsPage() {
  return (
    <PageLayout title="Crops">
      <SortableCropsTable />
    </PageLayout>
  );
}
