document.addEventListener('DOMContentLoaded', () => {
    // Sample data for orders
    const orders = [
      { folio: 1234, clasificacion: 'Residencial', orden: 'ORD-001', producto: 'Producto A', fecha: '2025-01-09', estatus: 'Cotización' },
      { folio: 4321, clasificacion: 'Residencial', orden: 'ORD-002', producto: 'Producto B', fecha: '2024-12-24', estatus: 'Cotización' },
      { folio: 1234, clasificacion: 'Residencial', orden: 'ORD-001', producto: 'Producto A', fecha: '2025-01-09', estatus: 'Cotización' },
      { folio: 4321, clasificacion: 'Residencial', orden: 'ORD-002', producto: 'Producto B', fecha: '2024-12-24', estatus: 'Cotización' },
    ];
  
    // Populate orders table (desktop view)
    const ordersTable = document.getElementById('ordersTable');
    orders.forEach(order => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td data-label="Folio:" >${order.folio}</td>
        <td data-label="Clasificacion:" >${order.clasificacion}</td>
        <td data-label="Orden:">${order.orden}</td>
        <td data-label="Producto:"> ${order.producto}</td>
        <td data-label="Fecha:">${order.fecha}</td>
        <td data-label="Estatus:">${order.estatus}</td>
        <td><button class="btn btn-primary btn-sm">Editar</button></td>
      `;
      ordersTable.appendChild(row);
    });
  

  
    // Initialize Chart.js charts
    const ctxPromoter = document.getElementById('chartPromoter').getContext('2d');
    new Chart(ctxPromoter, {
      type: 'doughnut',
      data: {
        labels: ['Promotor 1', 'Promotor 2', 'Promotor 3', 'Promotor 4'],
        datasets: [{
          data: [50, 20, 10, 20],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }]
      }
    });
  
    const ctxType = document.getElementById('chartType').getContext('2d');
    new Chart(ctxType, {
      type: 'pie',
      data: {
        labels: ['Hogar', 'Residencial'],
        datasets: [{
          data: [20, 5],
          backgroundColor: ['#007bff', '#000']
        }]
      }
    });
  
    const ctxProduct = document.getElementById('chartProduct').getContext('2d');
    new Chart(ctxProduct, {
      type: 'doughnut',
      data: {
        labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
        datasets: [{
          data: [50, 20, 10, 20],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545']
        }]
      }
    });

 
});
  
  