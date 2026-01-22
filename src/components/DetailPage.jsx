import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { restaurantsMapPoint } from '../features/restoSlice';

// setup default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [50, 50], 
});

const DetailPage = (
    { restaurant, currentId }
) => {
  const currentRestaurant = restaurantsMapPoint.find(r => r.id === currentId);

  function RecenterMap({ lat, lng }) {
    const map = useMap();
    map.setView([lat, lng], 15); // 15 = zoom level
    return null;
  }

  return <div className="columns mt-5 ml-5 mr-5">
            <div className="column is-two-fifths">
                <div className="card">
                    <div className="card-image image-wrapper">
                        <img src={restaurant.image} alt={restaurant.name} />
                    </div>  
                    <div className="card-content">
                        <h1 className="title is-3 pb-4">{restaurant.name}</h1>
                        <p className="subtitle is-5">{restaurant.address}</p>
                        <div className="content">
                            <p><strong>Rating:</strong> {restaurant.rating} / 5</p>
                            <p><strong>Categories:</strong> {restaurant.categories.join(", ")}</p>  
                        </div>
                    </div>
                </div>
                <div className="card mt-5 mb-5">
                    {currentRestaurant && (
                        <MapContainer
                            center={[currentRestaurant.lat, currentRestaurant.lng]} // awal tetap bisa
                            zoom={15}
                            scrollWheelZoom={false}
                            style={{ height: "400px", width: "100%" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[currentRestaurant.lat, currentRestaurant.lng]}>
                                <Popup>
                                    {currentRestaurant.name} | {currentRestaurant.address}
                                </Popup>
                            </Marker>
                            
                            {/* Recenter map ke marker */}
                            <RecenterMap lat={currentRestaurant.lat} lng={currentRestaurant.lng} />
                        </MapContainer>
                        )}
                </div>
            </div>
            <div className="column is-three-fifths">    
                <div className="title is-4 mb-4">Menu Items</div>
                <div class="fixed-grid has-1-cols has-1-cols-mobile has-background-white">
                    <div class="grid">
                        {restaurant.menu && restaurant.menu.length > 0 ? (
                            restaurant.menu.map((item, index) => (
                                <div className="cell" key={index}>
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="columns">
                                                <div className="column is-one-quarter">
                                                    <div className="image image-wrapper is-128x128">
                                                        <img src={item.image} alt={item.name}/>
                                                    </div>
                                                </div>
                                                <div className="columns">
                                                    <div className="column">
                                                        <p className="title is-3 has-text-weight-semi-bold">
                                                            {item.name}
                                                        </p>
                                                        <div className="content subtitle is-5 mt-6">
                                                            {item.deskription}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="columns width-full is-vcentered"> 
                                                <div className="column is-two-fifth">
                                                    <p className="subtitle is-5 has-text-grey">
                                                        Rating : {item.rating}
                                                    </p>
                                                </div>
                                                <div className="column is-two-fifth">
                                                </div>
                                                <div className="column is-one-fifth has-align-items-center is-flex is-justify-content-flex-end">
                                                    <button className="button has-background-grey-dark is-medium has-text-white is-fullwidth is-size-6">
                                                        Price : {item.price}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="has-text-centered has-text-grey p-5">
                                Menu belum tersedia
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>;
}

export default DetailPage;