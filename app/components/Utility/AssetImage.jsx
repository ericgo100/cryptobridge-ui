import React from "react";
import CryptoBridgeStore from "stores/CryptoBridgeStore";
import CryptoBridgeActions from "actions/CryptoBridgeActions";
import { connect } from "alt-react";

class AssetImage extends React.Component {

    static propTypes = {
        name: React.PropTypes.string,
        marketId: React.PropTypes.string
    };

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.cryptoBridgeAsset !== this.props.cryptoBridgeAsset
        );
    }

    componentWillMount() {
        CryptoBridgeActions.getAssets.defer();
    }

    _onImageError() {
        this.imgRef.src = "/asset-symbols/bco.png";
    }

    render() {
        let { name, marketId, cryptoBridgeAsset, style } = this.props;

        if(!name && marketId) {
            name = marketId.split("_").shift();
        }

        let imgSrc = cryptoBridgeAsset ? cryptoBridgeAsset.img : null;

        if(!imgSrc) {

            let imgName = "";

            if (name === "OPEN.BTC") {
                imgName = name;
            } else {
                const imgSplit = name.split(".");
                imgName = imgSplit.length === 2 ? imgSplit[1] : imgSplit[0];

                if(imgName === "BTC") { // TODO remove once added to API
                    imgSrc = "https://crypto-bridge.org/img/btc.png";
                }
            }

            if(!imgSrc) {
                imgSrc = `${__BASE_URL__}asset-symbols/${imgName.toLowerCase()}.png`;
            }
        }

        return (
            imgSrc ?
                <img
                    className="align-center"
                    ref={(imgRef) => { this.imgRef = imgRef; }}
                    onError={this._onImageError.bind(this)}
                    style={style || {}}
                    src={imgSrc}
                /> : <span />
        );
    }
}

export default connect(AssetImage, {
    listenTo() {
        return [CryptoBridgeStore];
    },
    getProps(props) {

        const cryptoBridgeAsset = props.marketId ?
            CryptoBridgeStore.getState().markets.get(props.marketId) :
            CryptoBridgeStore.getState().assets.get(props.name);

        return {
            cryptoBridgeAsset
        };
    }
});

