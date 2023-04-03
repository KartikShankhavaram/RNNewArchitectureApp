import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {
  DirectEventHandler,
  Double,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface NativeProps extends ViewProps {
  markerName: string;
  onMarkerPainted: DirectEventHandler<{paintTime: Double}>;
}

export default codegenNativeComponent<NativeProps>(
  'RTNTimeToRender',
) as HostComponent<NativeProps>;
