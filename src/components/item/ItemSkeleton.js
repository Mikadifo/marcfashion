import Skeleton from 'react-loading-skeleton';

const ItemSkeleton = ({ cards }) => {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div style={{ width: 200, margin: '0 32px' }} key={i}>
                <div style={{ marginBottom: 12 }}>
                    <Skeleton width={200} height={200} />
                </div>
                <div style={{}}>
                    <Skeleton />
                </div>
                <Skeleton width={'50%'} height={26} />
            </div>
        ));
};

export default ItemSkeleton;
