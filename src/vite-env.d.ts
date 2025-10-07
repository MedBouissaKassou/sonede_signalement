/// <reference types="vite/client" />

interface Window {
  google: typeof google;
}

declare namespace google.maps {
  class Map {
    constructor(element: HTMLElement, options: any);
    addListener(event: string, handler: Function): void;
  }

  class Marker {
    constructor(options: any);
    addListener(event: string, handler: Function): void;
    getPosition(): LatLng | null;
    setPosition(latLng: LatLng): void;
  }

  class LatLng {
    lat(): number;
    lng(): number;
  }

  interface MapMouseEvent {
    latLng: LatLng | null;
  }
}
