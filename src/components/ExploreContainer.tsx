import './ExploreContainer.css';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>world</IonCardTitle>
          <IonCardSubtitle>hellow</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          hello world
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
