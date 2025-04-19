import ServiceDetail from '@/app/components/ServiceDetail';

interface ServiceDetailPageProps {
  params: {
    id: string;
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  return <ServiceDetail serviceId={params.id} />;
}