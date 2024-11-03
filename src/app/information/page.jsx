import InformationForm from '@/components/InformationForm';
import styles from './InformationPage.module.scss';

export default function InformationPage() {
  return (
    <div className={styles.InformationPage}>
      <h1>Contractor Sign-in Form</h1>
      <InformationForm />
    </div>
  );
}