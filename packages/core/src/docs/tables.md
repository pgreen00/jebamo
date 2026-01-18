<!-- Basic Table -->
<section>
  <h2>1. Basic Table</h2>
  <div class="je-table-wrapper">
    <table class="je-table">
      <caption>Employee Data</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Alice Johnson</td>
          <td>Engineering</td>
          <td>Senior Developer</td>
          <td class="je-table-numeric">$95,000</td>
          <td><span class="je-table-cell-success">Active</span></td>
        </tr>
        <tr>
          <td>002</td>
          <td>Bob Smith</td>
          <td>Marketing</td>
          <td>Marketing Manager</td>
          <td class="je-table-numeric">$85,000</td>
          <td><span class="je-table-cell-success">Active</span></td>
        </tr>
        <tr class="je-table-row-warning">
          <td>003</td>
          <td>Carol White</td>
          <td>HR</td>
          <td>HR Specialist</td>
          <td class="je-table-numeric">$65,000</td>
          <td><span class="je-table-cell-warning">On Leave</span></td>
        </tr>
        <tr>
          <td>004</td>
          <td>David Brown</td>
          <td>Engineering</td>
          <td>DevOps Engineer</td>
          <td class="je-table-numeric">$90,000</td>
          <td><span class="je-table-cell-success">Active</span></td>
        </tr>
        <tr class="je-table-row-disabled">
          <td>005</td>
          <td>Eve Davis</td>
          <td>Sales</td>
          <td>Sales Representative</td>
          <td class="je-table-numeric">$70,000</td>
          <td><span class="je-table-cell-danger">Inactive</span></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4"><strong>Total Employees</strong></td>
          <td class="je-table-numeric"><strong>$405,000</strong></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</section>

<!-- Density Options -->
<section>
  <h2>2. Density Variants</h2>
  <div class="controls">
    <button onclick="setDensity('')">Default</button>
    <button onclick="setDensity('compact')">Compact</button>
    <button onclick="setDensity('comfortable')">Comfortable</button>
    <button onclick="setDensity('spacious')">Spacious</button>
  </div>
  <div class="je-table-wrapper">
    <table id="densityTable" class="je-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>SKU</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Laptop Pro 15"</td>
          <td>LPT-001</td>
          <td class="je-table-numeric">$1,299.99</td>
          <td class="je-table-numeric">45</td>
        </tr>
        <tr>
          <td>Wireless Mouse</td>
          <td>MSE-042</td>
          <td class="je-table-numeric">$29.99</td>
          <td class="je-table-numeric">230</td>
        </tr>
        <tr>
          <td>USB-C Hub</td>
          <td>HUB-018</td>
          <td class="je-table-numeric">$49.99</td>
          <td class="je-table-numeric">112</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Sortable Table -->
<section>
  <h2>3. Sortable Table</h2>
  <div class="je-table-wrapper">
    <table class="je-table:sortable:hoverable">
      <thead>
        <tr>
          <th data-sort="name">Product Name</th>
          <th data-sort="category">Category</th>
          <th data-sort="price" class="je-table-numeric">Price</th>
          <th data-sort="rating" class="je-table-numeric">Rating</th>
          <th data-sort="stock" class="je-table-numeric">Stock</th>
        </tr>
      </thead>
      <tbody id="sortableTableBody">
        <tr>
          <td>Gaming Keyboard</td>
          <td>Accessories</td>
          <td class="je-table-numeric" data-value="89.99">$89.99</td>
          <td class="je-table-numeric" data-value="4.5">⭐ 4.5</td>
          <td class="je-table-numeric" data-value="67">67</td>
        </tr>
        <tr>
          <td>4K Monitor</td>
          <td>Displays</td>
          <td class="je-table-numeric" data-value="399.99">$399.99</td>
          <td class="je-table-numeric" data-value="4.8">⭐ 4.8</td>
          <td class="je-table-numeric" data-value="23">23</td>
        </tr>
        <tr>
          <td>Webcam HD</td>
          <td>Accessories</td>
          <td class="je-table-numeric" data-value="79.99">$79.99</td>
          <td class="je-table-numeric" data-value="4.2">⭐ 4.2</td>
          <td class="je-table-numeric" data-value="156">156</td>
        </tr>
        <tr>
          <td>Desk Lamp</td>
          <td>Office</td>
          <td class="je-table-numeric" data-value="34.99">$34.99</td>
          <td class="je-table-numeric" data-value="4.6">⭐ 4.6</td>
          <td class="je-table-numeric" data-value="89">89</td>
        </tr>
        <tr>
          <td>Ergonomic Chair</td>
          <td>Furniture</td>
          <td class="je-table-numeric" data-value="299.99">$299.99</td>
          <td class="je-table-numeric" data-value="4.9">⭐ 4.9</td>
          <td class="je-table-numeric" data-value="12">12</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Selectable Table -->
<section>
  <h2>4. Selectable Table with Checkboxes</h2>
  <div class="controls">
    <button onclick="selectAll()">Select All</button>
    <button onclick="deselectAll()">Deselect All</button>
    <button onclick="deleteSelected()">Delete Selected</button>
  </div>
  <div class="je-table-wrapper">
    <table class="je-table:selectable:hoverable">
      <thead>
        <tr>
          <th><input type="checkbox" id="selectAllCheckbox" onchange="toggleAll(this)"></th>
          <th>Task</th>
          <th>Assignee</th>
          <th>Due Date</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody id="selectableTableBody">
        <tr>
          <td><input type="checkbox" class="row-checkbox" onchange="toggleRow(this)"></td>
          <td>Update documentation</td>
          <td>Alice</td>
          <td>2024-01-15</td>
          <td><span class="je-table-cell-warning">Medium</span></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="row-checkbox" onchange="toggleRow(this)"></td>
          <td>Fix critical bug</td>
          <td>Bob</td>
          <td>2024-01-10</td>
          <td><span class="je-table-cell-danger">High</span></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="row-checkbox" onchange="toggleRow(this)"></td>
          <td>Review pull request</td>
          <td>Carol</td>
          <td>2024-01-12</td>
          <td><span class="je-table-cell-success">Low</span></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="row-checkbox" onchange="toggleRow(this)"></td>
          <td>Deploy to staging</td>
          <td>David</td>
          <td>2024-01-11</td>
          <td><span class="je-table-cell-warning">Medium</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Striped & Bordered -->
<section>
  <h2>5. Striped Table</h2>
  <div class="je-table-wrapper">
    <table class="je-table:striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2024-01-08</td>
          <td>Monthly Subscription</td>
          <td class="je-table-numeric">-$29.99</td>
          <td class="je-table-cell-success">Completed</td>
        </tr>
        <tr>
          <td>2024-01-07</td>
          <td>Refund - Order #1234</td>
          <td class="je-table-numeric">+$149.99</td>
          <td class="je-table-cell-success">Completed</td>
        </tr>
        <tr>
          <td>2024-01-05</td>
          <td>Purchase - Electronics</td>
          <td class="je-table-numeric">-$499.99</td>
          <td class="je-table-cell-success">Completed</td>
        </tr>
        <tr>
          <td>2024-01-03</td>
          <td>Payment Processing</td>
          <td class="je-table-numeric">-$99.99</td>
          <td class="je-table-cell-warning">Pending</td>
        </tr>
        <tr>
          <td>2024-01-01</td>
          <td>Deposit</td>
          <td class="je-table-numeric">+$1,000.00</td>
          <td class="je-table-cell-success">Completed</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Sticky Column -->
<section>
  <h2>6. Sticky First Column (Scroll Horizontally)</h2>
  <div class="je-table-wrapper" style="max-width: 800px;">
    <table class="je-table:sticky-first:bordered">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Alice Johnson</strong></td>
          <td class="je-table-numeric">98%</td>
          <td class="je-table-numeric">95%</td>
          <td class="je-table-numeric">97%</td>
          <td class="je-table-numeric">99%</td>
          <td class="je-table-numeric">96%</td>
          <td class="je-table-numeric">98%</td>
          <td class="je-table-numeric">94%</td>
          <td class="je-table-numeric">97%</td>
          <td class="je-table-numeric">99%</td>
          <td class="je-table-numeric">98%</td>
          <td class="je-table-numeric">96%</td>
          <td class="je-table-numeric">97%</td>
        </tr>
        <tr>
          <td><strong>Bob Smith</strong></td>
          <td class="je-table-numeric">92%</td>
          <td class="je-table-numeric">94%</td>
          <td class="je-table-numeric">91%</td>
          <td class="je-table-numeric">93%</td>
          <td class="je-table-numeric">95%</td>
          <td class="je-table-numeric">94%</td>
          <td class="je-table-numeric">96%</td>
          <td class="je-table-numeric">93%</td>
          <td class="je-table-numeric">92%</td>
          <td class="je-table-numeric">94%</td>
          <td class="je-table-numeric">95%</td>
          <td class="je-table-numeric">93%</td>
        </tr>
        <tr>
          <td><strong>Carol White</strong></td>
          <td class="je-table-numeric">89%</td>
          <td class="je-table-numeric">91%</td>
          <td class="je-table-numeric">88%</td>
          <td class="je-table-numeric">90%</td>
          <td class="je-table-numeric">92%</td>
          <td class="je-table-numeric">91%</td>
          <td class="je-table-numeric">89%</td>
          <td class="je-table-numeric">90%</td>
          <td class="je-table-numeric">91%</td>
          <td class="je-table-numeric">93%</td>
          <td class="je-table-numeric">92%</td>
          <td class="je-table-numeric">90%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<script>
  // Density switcher
  function setDensity(className) {
    const table = document.getElementById('densityTable');
    table.className = 'je-table' + (className ? ':' + className : '');
    
    // Update button states
    document.querySelectorAll('.controls button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }

  // Sortable table functionality
  const sortableTable = document.querySelector('.je-table:sortable:hoverable');
  if (sortableTable) {
    const headers = sortableTable.querySelectorAll('th[data-sort]');
    
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const column = header.dataset.sort;
        const tbody = document.getElementById('sortableTableBody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // Determine sort direction
        const isAsc = header.classList.contains('je-sort-asc');
        
        // Remove sort classes from all headers
        headers.forEach(h => h.classList.remove('je-sort-asc', 'je-sort-desc'));
        
        // Add appropriate class
        header.classList.add(isAsc ? 'je-sort-desc' : 'je-sort-asc');
        
        // Get column index
        const columnIndex = Array.from(header.parentElement.children).indexOf(header);
        
        // Sort rows
        rows.sort((a, b) => {
          const cellA = a.children[columnIndex];
          const cellB = b.children[columnIndex];
          
          // Use data-value if available, otherwise text content
          const valueA = cellA.dataset.value || cellA.textContent.trim();
          const valueB = cellB.dataset.value || cellB.textContent.trim();
          
          // Try numeric comparison first
          const numA = parseFloat(valueA.replace(/[^0-9.-]/g, ''));
          const numB = parseFloat(valueB.replace(/[^0-9.-]/g, ''));
          
          if (!isNaN(numA) && !isNaN(numB)) {
            return isAsc ? numB - numA : numA - numB;
          }
          
          // Fallback to string comparison
          return isAsc 
            ? valueB.localeCompare(valueA)
            : valueA.localeCompare(valueB);
        });
        
        // Re-append sorted rows
        rows.forEach(row => tbody.appendChild(row));
      });
    });
  }

  // Selectable table functionality
  function toggleRow(checkbox) {
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
      row.classList.add('je-table-row-selected');
    } else {
      row.classList.remove('je-table-row-selected');
    }
    updateSelectAllCheckbox();
  }

  function toggleAll(checkbox) {
    const checkboxes = document.querySelectorAll('.row-checkbox');
    checkboxes.forEach(cb => {
      cb.checked = checkbox.checked;
      toggleRow(cb);
    });
  }

  function updateSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    const checkboxes = document.querySelectorAll('.row-checkbox');
    const checkedCount = document.querySelectorAll('.row-checkbox:checked').length;
    
    selectAllCheckbox.checked = checkedCount === checkboxes.length;
    selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  }

  function selectAll() {
    document.getElementById('selectAllCheckbox').checked = true;
    toggleAll(document.getElementById('selectAllCheckbox'));
  }

  function deselectAll() {
    document.getElementById('selectAllCheckbox').checked = false;
    toggleAll(document.getElementById('selectAllCheckbox'));
  }

  function deleteSelected() {
    const selected = document.querySelectorAll('.row-checkbox:checked');
    if (selected.length === 0) {
      alert('No rows selected');
      return;
    }
    
    if (confirm(`Delete ${selected.length} selected row(s)?`)) {
      selected.forEach(checkbox => {
        checkbox.closest('tr').remove();
      });
      updateSelectAllCheckbox();
    }
  }
</script>