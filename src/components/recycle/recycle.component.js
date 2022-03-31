import React, {
  memo,
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Button,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Card } from "react-native-paper";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
  BaseScrollView,
} from "recyclerlistview"; // Version can be specified in package.json

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

 const ViewTypes = {
  FULL: 0,
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

let containerCount = 0;

const pageSize = 4;

let { width } = Dimensions.get("window");

export const ListView = memo(() => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { restaurants } = useContext(RestaurantsContext);

  const _layoutProvider = useRef(layoutMaker()).current;

  const listView = useRef();

  //   const resArray = [];
  //   restaurants.forEach((e) => {
  //     resArray.push({
  //       type: "FULL",
  //       item: e,
  //     });
  //   });

  const dataProvider = useMemo(() => dataProviderMaker(restaurants), [
    restaurants,
  ]);

  //   useEffect(() => {
  //     console.log("data in 2", data);
  //   }, [data]);

  const load = useCallback(
    async (data, more = false) => {
      try {
        if (more) {
          setIsLoadingMore(!!more);
        } else {
          setIsLoading(true);
        }

        const resData = await fake(data);
        setData(resData);
      } catch (e) {
        console.log(e);
      } finally {
        if (more) {
          setIsLoadingMore(false);
        } else {
          setIsLoading(false);
          setIsLoadingMore(false);
          !loaded && setLoaded(true);
        }
      }
    },
    [loaded]
  );

  const loadMore = () => {
    console.log("end");
    load([...data, ...generateArray(pageSize)], true);
  };

  const refresh = async () => {
    load(generateArray(pageSize));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      //  listView?.scrollTo({y: 300, animated: true});
    }, 5000);

    load(generateArray(pageSize));

    return () => {
      clearTimeout(timeout);
    };
  }, [load]);

  if (!loaded && isLoading) {
    return (
      <ActivityIndicator
        style={{ marginTop: "50%", alignSelf: "center" }}
        size="large"
      />
    );
  }

  if (!data.length) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Button title="Refresh" onPress={() => refresh()} />
      <RecyclerListView
        ref={listView}
        scrollViewProps={{
          refreshControl: (
            <RefreshControl
              refreshing={loaded && isLoading}
              onRefresh={() => refresh()}
            />
          ),
        }}
        renderFooter={() => <RenderFooter loading={isLoadingMore} />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={1}
        externalScrollView={ExternalScrollView}
        layoutProvider={_layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
      />

      <Button title="Load More" onPress={() => loadMore()} />
    </View>
  );
});

const layoutMaker = () =>
  new LayoutProvider(
    (index) => {
      if (index % 3 === 0) {
        return ViewTypes.FULL;
      } else if (index % 3 === 1) {
        return ViewTypes.FULL;
      } else {
        return ViewTypes.FULL;
      }
    },
    (type, dim) => {
      switch (type) {
        case ViewTypes.FULL:
          dim.width = width;
          dim.height = 160;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

const rowRenderer = (type, data) => {
  const {
    businessStatus,
    geometry,
    icon,
    iconBackgroundColor,
    iconMaskBaseUri,
    name,
    openingHours,
    photos,
    placeId,
    plusCode,
    priceLevel,
    rating,
    reference,
    scope,
    types,
    userRatingsTotal,
    vicinity,
    isOpenNow,
    isClosedTemporarily,
  } = data;

  return (
      <View>
   <Card>
      <Card.Cover  source={{ uri: data.photos[0] }} />
    </Card>
      </View>
 
  );
};

const RenderFooter = ({ loading }) =>
  loading && (
    <ActivityIndicator
      style={{ margin: 20, alignSelf: "center", flex: 1 }}
      size="large"
    />
  );

const dataProviderMaker = (data) =>
  new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);

const generateArray = (n) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  return arr;
};

class ExternalScrollView extends BaseScrollView {
  scrollTo = (...args) => {
    if (this._scrollViewRef) {
      this._scrollViewRef.scrollTo(...args);
    }
  };

  render() {
    return (
      <ScrollView
        {...this.props}
        ref={(scrollView) => {
          this._scrollViewRef = scrollView;
        }}
      />
    );
  }
}

class CellContainer extends React.Component {
  constructor(args) {
    super(args);
    this._containerId = containerCount++;
  }
  render() {
    return (
      <View {...this.props}>
        {this.props.children}
        <Text>Cell Id: {this._containerId}</Text>
      </View>
    );
  }
}

const fake = (data) => {
  return new Promise(function (resolve, reject) {
    try {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    } catch (e) {
      reject(e);
    }
  });
};
