import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNavigation, Provider as PaperProvider } from 'react-native-paper';

import Products from './Products';
import Product_Search from './Product_Search';
import Product_Add from './Product_Add';
import Product_Detail from './Product_Detail';

const ProductsRoute = () => <Products />;
const SearchRoute = () => <Product_Search />;
const AddRoute = () => <Product_Add />;
const DetailRoute = () => <Product_Detail />;

export default function App() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'products', title: 'Products', focusedIcon: 'home' },
    { key: 'search', title: 'Search', focusedIcon: 'magnify' },
    { key: 'add', title: 'Add', focusedIcon: 'plus-box' },
    { key: 'detail', title: 'Detail', focusedIcon: 'information' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    products: ProductsRoute,
    search: SearchRoute,
    add: AddRoute,
    detail: DetailRoute,
  });

  return (
    // <PaperProvider>
      <SafeAreaProvider>
          <BottomNavigation
          barStyle={{
            height: 100,          
            paddingBottom: 12,  
            paddingTop: 8,
            backgroundColor: '#fff',
            elevation: 10,    
          }}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
      </SafeAreaProvider>
    // </PaperProvider>
  );
}
