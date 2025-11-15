import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Eye, Edit, Trash2, Search, Filter } from 'lucide-react';
import { MessageTruncator } from './MessageTruncator';
import type { DataTableProps, TableRow } from './type';


export const NotificationTable: React.FC<DataTableProps> = ({ 
  data, 
  rowsPerPageOptions = [5, 10, 25, 50],
  initialRowsPerPage = 10 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [messageTypeFilter, setMessageTypeFilter] = useState('');

  const uniqueTypes = useMemo(() => {
    const types = [...new Set(data.map(item => item.type))];
    return types.sort();
  }, [data]);

  const uniqueMessageTypes = useMemo(() => {
    const messageTypes = [...new Set(data.map(item => item.messageType))];
    return messageTypes.sort();
  }, [data]);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm);
      
      const matchesType = typeFilter === '' || item.type === typeFilter;
      const matchesMessageType = messageTypeFilter === '' || item.messageType === messageTypeFilter;

      return matchesSearch && matchesType && matchesMessageType;
    });
  }, [data, searchTerm, typeFilter, messageTypeFilter]);

  const totalRows = filteredData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, rowsPerPage]);

  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleTypeFilterChange = (value: string) => {
    setTypeFilter(value);
    setCurrentPage(1);
  };

  const handleMessageTypeFilterChange = (value: string) => {
    setMessageTypeFilter(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setTypeFilter('');
    setMessageTypeFilter('');
    setCurrentPage(1);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 3;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-3 py-2 bg-white border border-[#D0D0D0] rounded shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
      >
        <ChevronLeft className="w-4 h-4" color='#232AAB' />
      </button>
    );

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 border border-[#D0D0D0] shadow-sm ${
            i === currentPage
              ? 'bg-[#232AAB] text-white border-[#232AAB]'
              : 'bg-white text-[#232AAB] hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="ellipsis" className="px-3 py-2 text-[#232AAB]">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 text-[#232AAB]"
        >
          {totalPages}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 px-3 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
      >
        <ChevronRight className="w-4 h-4" color='#232AAB' />
      </button>
    );

    return buttons;
  };

  const handleAction = (action: string, row: TableRow) => {
    console.log(`${action} action for row:`, row);
    // Implement your action logic here
  };

  return (
    <div className="w-full bg-white rounded-[11px]">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by ID, title, or message..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-3 items-center">
            <Filter className="text-gray-400 w-4 h-4" />
            
            <select
              value={typeFilter}
              onChange={(e) => handleTypeFilterChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">All Types</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={messageTypeFilter}
              onChange={(e) => handleMessageTypeFilterChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">All Message Types</option>
              {uniqueMessageTypes.map(messageType => (
                <option key={messageType} value={messageType}>{messageType}</option>
              ))}
            </select>

            {/* Clear Filters */}
            {(searchTerm || typeFilter || messageTypeFilter) && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        {(searchTerm || typeFilter || messageTypeFilter) && (
          <div className="mt-3 text-sm text-gray-600">
            Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
            {totalRows !== data.length && ` (filtered from ${data.length} total)`}
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[#607080]">
          <thead>
            <tr className="">
              <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-500  tracking-wider">Id</th>
              <th className="px-2 py-3 text-left font-extrabold text-[#607080] text-[12px] tracking-wider">Title</th>
              <th className="px-6 py-3 text-left font-extrabold text-[#607080] text-[12px] tracking-wider">Message</th>
              <th className="px-6 py-3 text-left font-extrabold text-[#607080] text-[12px] tracking-wider">Type</th>
              <th className="px-6 py-3 text-left font-extrabold text-[#607080] text-[12px] tracking-wider">Message Type</th>
              <th className="px-6 py-3 font-extrabold text-[#607080] text-[12px] tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody >
            {paginatedData.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap text-[19px]">
                  {row.id}
                </td>
                <td className="px-2 py-4 whitespace-nowrap text-[14px]">
                  <MessageTruncator text={row.title} maxLength={30} />
                </td>
                <td className="px-6 py-4 text-[14px] max-w-xs">
                  <MessageTruncator text={row.message} maxLength={60} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[14px]">
                  <span className="inline-flex text-[14px]">
                    {row.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className="inline-flex px- py-1 text-xs font-[14px]">
                    {row.messageType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAction('view', row)}
                      className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleAction('edit', row)}
                      className="text-gray-600 hover:text-gray-800 p-1 hover:bg-gray-50 rounded"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleAction('delete', row)}
                      className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-white">
        <div className="flex items-center space-x-4 flex-1 justify-center">
          <span className="text-[12px]">
            Showing {startRow} to {endRow} of {totalRows} rows
          </span>
          <select
            value={rowsPerPage}
            onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
            className="px-2 py-1 border border-[#C2C8C8] text-white bg-[#6C757D] rounded text-sm focus:outline-none"
          >
            {rowsPerPageOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <span className="text-sm">rows per page</span>
        </div>

        <div className="flex items-center">
          {renderPaginationButtons()}
        </div>
      </div>
    </div>
  );
};