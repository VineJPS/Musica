import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    color: '#bb86fc',
    fontSize: 14,
    fontWeight: '600',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  nome: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  compositor: {
    color: '#cccccc',
    fontSize: 14,
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  duracao: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 4,
  },
  estilo: {
    color: '#bb86fc',
    fontSize: 12,
    fontWeight: '600',
  },
  playIcon: {
    marginLeft: 10, 
    color: "#bb86fc"
  },
  addButton: {
    backgroundColor: '#bb86fc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});