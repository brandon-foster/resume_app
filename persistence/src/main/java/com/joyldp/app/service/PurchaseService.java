package com.joyldp.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.joyldp.app.entity.PurchaseEntity;
import com.joyldp.app.repository.PurchaseEntityRepository;

@Service
public class PurchaseService {
    
    private final PurchaseEntityRepository purchaseRepository;
    
    public PurchaseService(PurchaseEntityRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }
    
    public List<PurchaseEntity> getAll() {
        return (List<PurchaseEntity>) purchaseRepository.findAll();
    }
    
    public PurchaseEntity createOne(PurchaseEntity purchaseEntity) {
        return purchaseRepository.save(purchaseEntity);
    }
    
    public PurchaseEntity updateOne(PurchaseEntity purchaseEntity) {
        return purchaseRepository.save(purchaseEntity);
    }
    
}
