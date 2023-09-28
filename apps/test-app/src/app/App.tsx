import Realm from 'realm';
import { createRealmContext } from '@realm/react';
import { View, Text } from 'react-native';

// Define your object model
class Profile extends Realm.Object<Profile> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  static schema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
    primaryKey: '_id',
  };
}

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Profile],
};

// Create a realm context
const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext(realmConfig);

export const App = () => {
  return (
    <RealmProvider>
      <View>
        <Text>Hello, world!</Text>
      </View>
    </RealmProvider>
  );
};

export default App;
