package com.joyldp.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.joyldp.app.entity.PurchaseEntity;

@Repository
public interface PurchaseEntityRepository extends CrudRepository<PurchaseEntity, Long> {
    
}
