import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductModalItem({ product, isSelected, onPress }) {
    return (
        <TouchableOpacity
            style={[
                styles.card,
                isSelected && styles.cardSelected, // stays selected
            ]}
            onPress={() => onPress(product.id)}
        >
            <Image
                source={
                    product.imageUri
                        ? { uri: product.imageUri }
                        : require('../../../assets/product_img.png')
                }
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.meta}>{product.brand}</Text>
                <Text style={styles.metaCategory}>{product.category}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F2BED1',
        padding: 12,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    cardSelected: {
        backgroundColor: '#FDE6F2',
        borderColor: '#E91E63',
    },
    image: {
        width: 80,
        height: 80,
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    meta: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    metaCategory: {
        fontSize: 13,
        color: '#888',
    },
});